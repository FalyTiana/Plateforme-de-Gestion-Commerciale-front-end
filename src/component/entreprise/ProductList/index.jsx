import { capitalizeFirstLetter } from "../../../utils/capitalizeLetter";
import { formatNumber } from "../../../utils/formatNumber";
import styles from "./ProductList.module.css"

function ProductList({ products, textHandleButton, handleProductClick, handleButton }) {
    return (
        <table className={styles.productsList}>
            <tbody>
                {products.map(product => (
                    <tr
                        key={product.id}
                        className={styles.productList}
                        onClick={() => handleProductClick(product)}
                    >
                        <td>
                            <div>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                                <h3>{product.name}</h3>
                            </div>

                        </td>

                        <td>
                            <p className={styles.category}>{capitalizeFirstLetter(product.category)}</p>
                        </td>

                        <td>
                            <p>{formatNumber(product.price)} Ar</p>
                        </td>


                        {textHandleButton && <td>
                            <button
                                onClick={(e) => { e.stopPropagation(); handleButton(product); }}
                                className={styles.addToCartButton}
                            >
                                {textHandleButton}
                            </button>
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductList