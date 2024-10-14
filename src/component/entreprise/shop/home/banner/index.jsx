import { useLocation, useNavigate } from 'react-router';
import styles from './Banner.module.css'
import ImgShop from "../../../../../assets/images/boutique.jpeg"

function Banner() {

    const navigate = useNavigate()
    const location = useLocation()

    // Redirection vers la boutique
    const handleShopNow = () => {
        navigate(`${location.pathname}/boutique`);
    };
    return (
        <div className={styles.container}>
            <section className={styles.banner}>
                <h1>Bienvenue chez MyShop</h1>
                <p>Votre boutique unique pour tous vos besoins. Découvrez des produits incroyables à des prix imbattables !</p>
                <button onClick={handleShopNow}>Découvrir maintenant</button>
            </section>
            <div className={styles.imgContenaire}>
                <img src={ImgShop} alt="" />
            </div>
        </div>
    )
}

export default Banner