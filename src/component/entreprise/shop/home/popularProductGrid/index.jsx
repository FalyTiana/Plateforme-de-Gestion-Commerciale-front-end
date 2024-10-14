import { useSelector } from "react-redux";
import styles from "./PopularProductGrid.module.css"

function PopularProductGrid() {

    const products = useSelector((state) => state.products.products);

    return (
        <section className={styles.section}>
                <h2>Produits Populaires</h2>
                <p>Découvrez certains de nos best-sellers que nos clients adorent.</p>
                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        // <div
                        //     key={product.id}
                        //     className={styles.productCard}
                        //     onClick={() => handleProductClick(product.id)}
                        // >
                        <div
                            key={product.id}
                            className={styles.productCard}
                        >

                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price} Ar</p>
                            {/* <button
                                onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                            > */}
                            <button>
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
                </div>
            </section>
    )
}

export default PopularProductGrid