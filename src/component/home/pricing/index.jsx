import { useSelector } from 'react-redux';
import PricingCard from './card';
import styles from './Pricing.module.css'
function Pricing() {
    const pricingPlans = useSelector((state) => state.pricingPlans.pricingPlans)

    return (
        <div className={styles.pricing}>
            {pricingPlans.map((plan, index) => (
                <PricingCard
                    key={index}
                    planName={plan.planName}
                    price={plan.price}
                    features={plan.features}
                />
            ))}
        </div>
    );
}

export default Pricing;
