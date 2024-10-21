/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './DynamicForm.module.css'
import { FiTrash, FiTrash2 } from 'react-icons/fi';

const DynamicForm = () => {
    const [columns, setColumns] = useState([]); // Initialisé à vide
    const [data, setData] = useState([]); // Initialisé à vide

    // Ajouter une nouvelle colonne avec un id unique et un label vide
    const addColumn = () => {
        if (data.length === 0) {
            addRow(); // Ajouter une ligne si aucune ligne n'existe
        }
        const newId = columns.length > 0 ? columns[columns.length - 1].id + 1 : 1; // générer un id unique
        setColumns([...columns, { id: newId, label: '' }]);

        // Ajouter une nouvelle colonne vide à chaque ligne existante
        const updatedData = data.map((row) => ({ ...row, [newId]: '' }));
        setData(updatedData);
        if (data.length === 0) {
            addRow(); // Ajouter une ligne si aucune ligne n'existe
        }
    };


    // Supprimer une colonne spécifique
    const removeColumn = (idToRemove) => {
        setColumns(columns.filter((column) => column.id !== idToRemove)); // supprimer la colonne par id
        const updatedData = data.map((row) => {
            const { [idToRemove]: _, ...rest } = row; // retirer la colonne correspondante dans chaque ligne
            return rest;
        });
        setData(updatedData);

        // Si toutes les colonnes sont supprimées, réinitialiser les lignes
        if (columns.length - 1 === 0) {
            setData([]); // Réinitialise les lignes à vide si toutes les colonnes sont supprimées
        }
    };

    // Ajouter une nouvelle ligne
    const addRow = () => {
        const newRow = {};
        columns.forEach((column) => {
            newRow[column.id] = ''; // initialiser chaque colonne avec une valeur vide
        });
        setData([...data, newRow]);
    };

    // Supprimer une ligne spécifique
    const removeRow = (indexToRemove) => {
        // Ne pas supprimer si c'est la dernière ligne et qu'il y a des colonnes
        if (data.length > 1) {
            setData(data.filter((_, index) => index !== indexToRemove)); // supprimer la ligne par index
        } else {
            alert("Impossible de supprimer la dernière ligne tant qu'il reste des colonnes.");
        }
    };

    // Gérer les changements de valeur dans une cellule
    const handleInputChange = (index, columnId, value) => {
        const updatedData = [...data];
        updatedData[index][columnId] = value; // mettre à jour la cellule correspondant à la colonne et à la ligne
        setData(updatedData);
    };

    // Gérer le changement de label
    const handleLabelChange = (index, newLabel) => {
        const updatedColumns = [...columns];
        updatedColumns[index].label = newLabel; // mettre à jour le label pour la colonne spécifique
        setColumns(updatedColumns);
    };

    return (
        <div className={styles.container}>
            <div className={styles.caractContainer}>
                <label>Caractéristiques :</label>
                {columns.length === 0 && <p>{'Aucune colonne. Cliquez sur "Ajouter une Colonne" pour commencer.'}</p>}
                <table>
                    {columns.length > 0 && (
                        <>
                            <thead>
                                <tr>
                                    {columns.map((column, colIndex) => (
                                        <th key={column.id}>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={column.label} // saisir le label ici
                                                    onChange={(e) => handleLabelChange(colIndex, e.target.value)}
                                                />
                                                <button onClick={() => removeColumn(column.id)}>
                                                    <FiTrash2 />
                                                </button>
                                            </div>

                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((column) => (
                                            <td key={column.id}>
                                                <input
                                                    type="text"
                                                    value={row[column.id] || ''} // afficher la valeur de la cellule
                                                    onChange={(e) =>
                                                        handleInputChange(rowIndex, column.id, e.target.value)
                                                    }
                                                />
                                            </td>
                                        ))}
                                        <td>
                                            {rowIndex >= 1 &&
                                                <div>
                                                    <input type="number" placeholder='Prix ajouter' />
                                                    <button onClick={() => removeRow(rowIndex)}>
                                                        <FiTrash />
                                                    </button>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </>
                    )}
                </table>
            </div>
            <button onClick={addColumn}>Ajouter une Colonne</button>
            <br />
            {columns.length > 0 && <button onClick={addRow}>Ajouter une Ligne</button>}
        </div>
    );
};

export default DynamicForm;
