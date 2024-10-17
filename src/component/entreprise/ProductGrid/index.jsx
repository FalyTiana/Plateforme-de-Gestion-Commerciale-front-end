import { formatNumber } from "../../../utils/formatNumber";
import styles from "./ProductGrid.module.css";


function ProductGrid({ products, textHandleButton, handleProductClick, handleButton }) {
    return (
        <div className={styles.productsGrid}>
            {products.map(product => (
                <div
                    key={product.id}
                    className={styles.productCard}
                    onClick={() => handleProductClick(product)}
                >
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                    <h3>{product.name}</h3>
                    <p>{formatNumber(product.price)} Ar</p>
                    {textHandleButton && <button
                        onClick={(e) => { e.stopPropagation(); handleButton(product); }}
                        className={styles.addToCartButton}
                    >
                        {textHandleButton}
                    </button>}
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
