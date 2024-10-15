import { useDispatch, useSelector } from "react-redux";
import Header from "../../../../../component/entreprise/header"
import { breadcrumbItemsBoutique } from "../../../../../utils/breadcrumbItems"
import styles from "./Basket.module.css"
// import { useNavigate } from "react-router";
import { clearCart, removeFromCart, updateQuantity } from "../../../../../redux/slices/cartSlice";
import EmptyState from "../../../../../component/emptyState";
import { formatNumber } from "../../../../../utils/formatNumber";

function Basket() {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // Sélectionner les articles du panier et les infos du panier depuis Redux
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);  // Assurez-vous que totalQuantity est bien sélectionné
    const totalPrice = useSelector((state) => state.cart.totalPrice);  // Assurez-vous que totalPrice est bien sélectionné


    // Gestion de la suppression d'un article du panier
    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    // Gestion de la mise à jour de la quantité d'un article dans le panier
    const handleQuantityChange = (id, quantity) => {
        if (quantity < 1) return;  // Ne pas permettre de mettre à 0 via ce champ
        dispatch(updateQuantity({ id, quantity }));
    };

    // Vider le panier
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <Header title={"Boutique"} breadcrumb={breadcrumbItemsBoutique} />
            <div className={styles.container}>
                <h1 className={styles.title}>Votre Panier</h1>

                {/* Si le panier est vide */}
                {cartItems.length === 0 ? (
                    <EmptyState message={"Votre panier est vide."} />
                ) : (
                    <div className={styles.tableContainer}>
                        <table className={styles.cartTable}>
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Prix (Ar)</th>
                                    <th>Quantité</th>
                                    <th>Total (Ar)</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div>
                                                <img src={item.image} alt={item.name} className={styles.cartImage} />
                                                <span>{item.name}</span>
                                            </div>
                                        </td>
                                        <td>{formatNumber(item.price)}</td>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                                className={styles.quantityInput}
                                            />
                                        </td>
                                        <td>{formatNumber((item.price * item.quantity).toFixed(2))}</td>
                                        <td>
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className={styles.removeButton}
                                            >
                                                Retirer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Total */}
                        <div className={styles.cartSummary}>
                            <p>Total des articles: {totalQuantity}</p>
                            <p>Total à payer: {formatNumber(Number(totalPrice).toFixed(2))} Ar</p>  {/* Assurez-vous que totalPrice est bien un nombre */}
                            <button
                                onClick={handleClearCart}
                                className={styles.clearCartButton}
                            >
                                Vider le panier
                            </button>
                            <button
                                // onClick={() => navigate('/checkout')}
                                className={styles.checkoutButton}
                            >
                                Procéder au paiement
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Basket