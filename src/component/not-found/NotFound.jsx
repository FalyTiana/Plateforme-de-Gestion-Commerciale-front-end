import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

function NotFound () {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.message}>{"Oups ! La page que vous recherchez n'existe pas."}</p>
            <Link to="/" className="btn btn2">{"Retour à l'accueil"}</Link>
        </div>
    );
};

export default NotFound;
