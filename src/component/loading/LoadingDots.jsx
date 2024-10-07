import styles from './LoadingDots.module.css';

function LoadingDots() {
    return (
        <div className={styles.loadingDots}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    );
}

export default LoadingDots;
