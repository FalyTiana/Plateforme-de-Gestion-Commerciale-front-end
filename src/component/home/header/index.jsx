import { useNavigate } from "react-router";
import { startTransition } from "react";
import styles from "./Header.module.css"
import HeaderImg from "../../../assets/images/home-header.png"

function Header() {

    const navigate = useNavigate();

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        startTransition(() => {
            navigate('/s-inscrire');
        });
    };

    return (
        <>
            <div>
                <span className="blur"></span>
                <span className="blur"></span>
                <h4 className={styles.h4}>GÉREZ VOTRE ENTREPRISE DE COMMERCE</h4>
                <h1 className={styles.h1}>Bonjour, je suis <span className={styles.span}>RAITRA</span></h1>
                <p className={styles.p}>
                    Plateforme de gestion commerciale complète qui permet de gérer efficacement tous les aspects de votre entreprise.
                </p>
                <div className={styles.containerButton}>
                    <button onClick={handleNavLinkClick} className="btn">
                        Commencer
                    </button>
                    <button className="btn btn2">
                        Visiter une boutique
                    </button>
                </div>
            </div>
            <div className={styles.image}>
                <img className={styles.img} src={HeaderImg} alt="header image" />
            </div>
        </>
    )
}

export default Header