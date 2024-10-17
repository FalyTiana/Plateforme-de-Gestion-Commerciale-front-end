import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ products, setFiltered }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFiltered(products);
        } else {
            setFiltered(products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchBar}
            />
            <button onClick={handleSearch} className={styles.searchButton}>Rechercher</button>
        </div>
    );
}

export default SearchBar;
