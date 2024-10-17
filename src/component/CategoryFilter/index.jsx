import { useState, useEffect } from "react";
import styles from "./CategoryFilter.module.css";
import { capitalizeFirstLetter } from "../../utils/capitalizeLetter";

function CategoryFilter({ products, setFiltered }) {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);


    // Extraire les catégories des produits de manière dynamique
    useEffect(() => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        setCategories(uniqueCategories);
    }, [products]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (e.target.value === '') {
            setFiltered(products);
        } else {
            const filtered = products.filter(product => product.category === e.target.value);
            setFiltered(filtered);
        }
    };

    return (
        <div className={styles.filterContainer}>
            <label htmlFor="category">Filtrer par catégorie :</label>
            <select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                className={styles.categorySelect}
            >
                <option value="">{capitalizeFirstLetter("Toutes les catégories")}</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>{capitalizeFirstLetter(`${cat}`)}</option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
