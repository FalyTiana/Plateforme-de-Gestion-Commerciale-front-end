/* eslint-disable react/prop-types */
import { FaBoxOpen } from 'react-icons/fa';  // Importation de l'icône FaBoxOpen
import styles from './EmptyState.module.css';

function EmptyState({ message }) {
    return (
        <div className={styles.emptyStateContainer}>
            <FaBoxOpen className={styles.emptyIcon} />  {/* Utilisation de l'icône */}
            <p className={styles.emptyMessage}>{message}</p>
        </div>
    );
}

export default EmptyState;
