import styles from "./Feature.module.css";
import { RiTruckLine } from "react-icons/ri";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LuWarehouse } from "react-icons/lu";
import { FaUsersRectangle } from "react-icons/fa6";
import CardFeatures from "./card";

function Features() {

    const featuresData = [
        {
            title: "Gestion de fournisseur",
            text: "Améliore la collaboration avec les fournisseurs, assure une meilleure qualité des produits et optimise les coûts d’achat.",
            icon: <RiTruckLine />
        },
        {
            title: "Gestion de commande",
            text: "Simplifie le processus de vente, améliore la précision des transactions et facilite le suivi des paiements.",
            icon: <LiaFileInvoiceDollarSolid />
        },
        {
            title: "Gestion de stock",
            text: "Optimise la gestion des inventaires, réduit les coûts de stockage et améliore la disponibilité des produits.",
            icon: <LuWarehouse />
        },
        {
            title: "Relation Client (CRM)",
            text: "Renforce la fidélité des clients et augmente les ventes grâce à une meilleure gestion des relations.",
            icon: <FaUsersRectangle />
        }
    ];

    return (
        <div className={styles.features}>
            {featuresData.map((feature, index) => (
                <CardFeatures
                    key={index}
                    title={feature.title}
                    text={feature.text}
                    icon={feature.icon}
                />
            ))}
        </div>
    );
}

export default Features;