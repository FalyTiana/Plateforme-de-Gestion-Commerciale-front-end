import { useNavigate } from "react-router";
import styles from "./CallToActionForPromotions.module.css"

function CallToActionForPromotions() {

    const navigate = useNavigate()

    return (
        <>

            {/* Appel à l'action pour promotions */}
            <section className={styles.callToAction}>
                <h2>Prêt à trouver votre prochaine bonne affaire ?</h2>
                <p>Achetez chez nous dès {"aujourd'hui"} et profitez de nos réductions et promotions spéciales.</p>
                <button onClick={() => navigate('/promotions')}>Commencer à acheter</button>
            </section>
        </>
    )
}

export default CallToActionForPromotions