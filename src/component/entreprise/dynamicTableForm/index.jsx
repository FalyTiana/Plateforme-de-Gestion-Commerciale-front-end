import { useState } from 'react';
import styles from './DynamicTableForm.module.css'; // Importation du module CSS

const DynamicTableForm = () => {
    const [columns, setColumns] = useState([{ label: '', value: '' }]);
    const [rows, setRows] = useState([{}]);

    // Fonction pour ajouter une nouvelle colonne
    const addColumn = () => {
        setColumns([...columns, { label: '', value: '' }]);
    };

    // Fonction pour ajouter une nouvelle ligne
    const addRow = () => {
        setRows([...rows, {}]);
    };

    // Fonction pour supprimer la dernière ligne
    const removeLastRow = () => {
        if (rows.length > 1) {
            setRows(rows.slice(0, -1)); // Supprimer la dernière ligne
        }
    };

    // Fonction pour supprimer la dernière colonne
    const removeLastColumn = () => {
        if (columns.length > 1) {
            const lastColumnLabel = columns[columns.length - 1].label;
            const newRows = rows.map((row) => {
                const newRow = { ...row };
                delete newRow[lastColumnLabel]; // Supprimer la valeur liée à la dernière colonne
                return newRow;
            });
            setRows(newRows); // Mettre à jour les lignes sans la dernière colonne
            setColumns(columns.slice(0, -1)); // Supprimer la dernière colonne
        }
    };

    // Fonction pour gérer le changement des labels des colonnes
    const handleColumnLabelChange = (index, e) => {
        const newColumns = [...columns];
        newColumns[index].label = e.target.value;
        setColumns(newColumns);
    };

    // Fonction pour gérer les valeurs saisies dans les champs
    const handleFieldValueChange = (rowIndex, label, e) => {
        const newRows = [...rows];
        newRows[rowIndex] = { ...newRows[rowIndex], [label]: e.target.value };
        setRows(newRows);
    };

    // Fonction de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises :', rows);
    };

    return (
        <div className={styles.formContainer}>
            <table className={styles.formTable}>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>
                                <input
                                    type="text"
                                    placeholder={`Label ${index + 1}`}
                                    value={column.label}
                                    onChange={(e) => handleColumnLabelChange(index, e)}
                                    className={styles.inputField}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                        type="text"
                                        placeholder={`Valeur pour ${column.label}`}
                                        value={row[column.label] || ''}
                                        onChange={(e) =>
                                            handleFieldValueChange(rowIndex, column.label, e)
                                        }
                                        className={styles.inputField}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.buttonGroup}>
                <button type="button" onClick={addColumn} className={styles.addButton}>
                    Ajouter une colonne
                </button>
                <button type="button" onClick={addRow} className={styles.addButton}>
                    Ajouter une ligne
                </button>
                <button
                    type="button"
                    onClick={removeLastRow}
                    className={styles.deleteButton}
                >
                    Supprimer la dernière ligne
                </button>
                <button
                    type="button"
                    onClick={removeLastColumn}
                    className={styles.deleteButton}
                >
                    Supprimer la dernière colonne
                </button>
            </div>

            <button onClick={handleSubmit} className={styles.submitButton}>
                Soumettre
            </button>

        </div>
    );
};

export default DynamicTableForm;
