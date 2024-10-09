/* eslint-disable react/prop-types */
import styles from "./Header.module.css"
import Logo from '../../logo'
import ButtonMode from '../../theme-mode/ButtonMode'
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.header}>
            <button className={styles.containerLogo} onClick={handleNavLinkClick}>
                <Logo />
            </button>
            <div className={styles.buttonMode}>
                <ButtonMode />
            </div>
        </div>
    )
}

export default Header