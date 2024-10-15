import { SlBasket } from "react-icons/sl";
import styles from "./ButtonBasket.module.css";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ButtonBasket() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Appel direct de useSelector
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    if (totalQuantity !== undefined) {
      setIsLoading(false); 
    }
  }, [totalQuantity]);

  return (
    <div
      className={styles.buttonPanier}
      onClick={() => navigate(`/entreprise/${param.nom}/boutique/panier`)}
    >
      <SlBasket className={styles.icon} />
      <div className={styles.numContainer}>
        <p>{!isLoading ? (totalQuantity ? totalQuantity : "") : ""}</p>
      </div>
    </div>
  );
}

export default ButtonBasket;
