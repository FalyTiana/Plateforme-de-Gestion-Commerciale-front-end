import { useDispatch, useSelector } from "react-redux";
import styles from "./PopularProductGrid.module.css"
import { formatNumber } from "../../../../../utils/formatNumber";
import { useLocation, useNavigate } from "react-router";
import { addToCart } from "../../../../../redux/slices/cartSlice";

function PopularProductGrid() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products);
    const handleProductClick = (product) =>{
        navigate (`${location.pathname}/boutique/produit`, { state: {product} })
    }

    // Ajouter un produit au panier
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <section className={styles.section}>
                <h2>Produits Populaires</h2>
                <p>Découvrez certains de nos best-sellers que nos clients adorent.</p>
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className={styles.productCard}
                            onClick={() => handleProductClick(product)}
                        >
                        

                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{formatNumber(product.price)} Ar</p>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default PopularProductGrid