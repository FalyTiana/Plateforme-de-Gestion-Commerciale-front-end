import { useEffect, useState } from "react";
import Header from "../../../../../component/entreprise/header"
import { breadcrumbItemsBoutique } from "../../../../../utils/breadcrumbItems"
import styles from "./Shop.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { formatNumber } from "../../../../../utils/formatNumber";
import ButtonBasket from "../../../../../component/entreprise/shop/pannier/buttonBasket";
import EmptyState from "../../../../../component/emptyState";
import { addToCart } from "../../../../../redux/slices/cartSlice"

function Shop() {

    const [searchQuery, setSearchQuery] = useState('');
    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    const [category, setCategory] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    // Recherche de produits
    const handleSearch = () => {
        if (searchQuery.trim() === '') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        }
    };

    // Mettre à jour les produits filtrés lorsqu'ils sont chargés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    // Filtrage des produits par catégorie
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (e.target.value === '') {
            setFilteredProducts(products);  // Afficher tous les produits si aucune catégorie sélectionnée
        } else {
            const filtered = products.filter(product => product.category === e.target.value);
            setFilteredProducts(filtered);
        }
    };

    const handleProductClick = (product) => {
        navigate(`${location.pathname}/produit`, { state: { product } })
    }

    // Ajouter un produit au panier
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <Header title={"Boutique"} breadcrumb={breadcrumbItemsBoutique} />
            <div className={styles.container}>
                <h1 className={styles.title}>Notre Boutique</h1>
                <ButtonBasket />

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

                {/* Filtres de catégorie */}
                <div className={styles.filterContainer}>
                    <label htmlFor="category">Filtrer par catégorie :</label>
                    <select
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className={styles.categorySelect}
                    >
                        <option value="">Toutes les catégories</option>
                        <option value="vetements">Vêtements</option>
                        <option value="electronique">Électronique</option>
                        <option value="accessoires">Accessoires</option>
                    </select>
                </div>

                {filteredProducts && filteredProducts.length === 0 ? (
                    <EmptyState message="Aucun produit trouvé." />
                ) :
                    (/* Grille des produits */
                        <div className={styles.productsGrid}>
                            {filteredProducts.map(product => (
                                <div
                                    key={product.id}
                                    className={styles.productCard}
                                    onClick={() => handleProductClick(product)}
                                >
                                    <img src={product.image} alt={product.name} className={styles.productImage} />
                                    <h3>{product.name}</h3>
                                    <p>{formatNumber(product.price)} Ar</p>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                                        className={styles.addToCartButton}
                                    >
                                        Ajouter au panier
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        </>
    )
}

export default Shop