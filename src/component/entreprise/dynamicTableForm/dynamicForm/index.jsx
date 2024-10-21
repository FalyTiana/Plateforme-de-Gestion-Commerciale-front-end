/* eslint-disable no-unused-vars */
import { useState } from 'react';

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
        <div>
            <div>
                <label>Caractéristiques :</label>
                {columns.length === 0 && <p>{'Aucune colonne. Cliquez sur "Ajouter une Colonne" pour commencer.'}</p>}
                <table>
                    {columns.length > 0 && (
                        <>
                            <thead>
                                <tr>
                                    {columns.map((column, colIndex) => (
                                        <th key={column.id}>
                                            <input
                                                type="text"
                                                value={column.label} // saisir le label ici
                                                onChange={(e) => handleLabelChange(colIndex, e.target.value)}
                                            />
                                            <button onClick={() => removeColumn(column.id)}>
                                                Supprimer Colonne
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((column, colIndex) => (
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
                                            <button onClick={() => removeRow(rowIndex)}>
                                                Supprimer Ligne
                                            </button>
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
