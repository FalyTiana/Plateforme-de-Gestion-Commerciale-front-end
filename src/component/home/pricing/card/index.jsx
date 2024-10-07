/* eslint-disable react/prop-types */
import { RiCheckboxCircleLine } from 'react-icons/ri';
import styles from './PricingCard.module.css'

const PricingCard = ({ planName, price, features }) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h4 className={styles.h4}>{planName}</h4>
                <h3 className={styles.h3}>{price}</h3>
                {features.map((feature, index) => (
                    <p className={styles.p} key={index}>
                        <i className={styles.i}><RiCheckboxCircleLine /></i> {feature}
                    </p>
                ))}
            </div>
            <button className="btn btn2">Rejoignez-nous</button>
        </div>
    );
};

export default PricingCard;
