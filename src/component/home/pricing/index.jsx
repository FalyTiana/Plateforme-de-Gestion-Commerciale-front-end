import PricingCard from './card';
import styles from './Pricing.module.css'
function Pricing() {
    const pricingPlans = [
        {
            planName: 'Basic Plan',
            price: '0 Ar',
            features: ['Fonctionnaliés principales', "Envoi d'email"],
        },
        {
            planName: 'Gold Plan',
            price: '10k Ar',
            features: ['Fonctionnaliés principales', "Envoi d'email", 'Réseaux sociaux Meta'],
        },
        {
            planName: 'Diamond Plan',
            price: '100k Ar',
            features: ['Fonctionnaliés principales', "Envoi d'email", 'Réseaux sociaux Meta', 'ChatBot', 'Analyse de donnés par IA'],
        },
    ];

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
