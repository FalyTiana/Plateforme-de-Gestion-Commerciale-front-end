/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import Logo from '../../logo';
import ButtonMode from '../../theme-mode/ButtonMode';
import styles from './Nav.module.css'

function Nav({ home, features, pricing, about }) {

    const scrollToElement = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navLogo}>
                <span>
                    <Logo />
                </span>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <span className={styles.linkSpan} onClick={() => scrollToElement(home)}>
                        Accueil
                    </span>
                </li>
                <li>
                    <span className={styles.linkSpan} onClick={() => scrollToElement(features)}>
                        Fonctionnalités
                    </span>
                </li>
                <li>
                    <span className={styles.linkSpan} onClick={() => scrollToElement(pricing)}>
                        Tarifs
                    </span>
                </li>
                <li>
                    <span className={styles.linkSpan} onClick={() => scrollToElement(about)}>
                        À propos
                    </span>
                </li>
            </ul>
            <div className={styles.navRight}>
                <NavLink to="/se-connecter" className="btn">Se Connecter</NavLink>
                <ButtonMode />
            </div>

        </nav>
    )
}

export default Nav