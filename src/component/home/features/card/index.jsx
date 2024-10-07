/* eslint-disable react/prop-types */
import styles from "./CardFeatures.module.css"

function CardFeatures({ title, text, icon }) {
    return (
        <div className={styles.card}>
            <span className={styles.span}><i className={styles.i}>{icon}</i></span>
            <h4 className={styles.h4}>{title}</h4>
            <p className={styles.p}>{text}</p>
        </div>
    )
}

export default CardFeatures