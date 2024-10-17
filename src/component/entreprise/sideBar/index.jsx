/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BiSolidDashboard, BiStoreAlt, BiAnalyse, BiMessageSquareDots, BiGroup, BiCog, BiLogOutCircle } from "react-icons/bi";
import styles from './Sidebar.module.css';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../logo";
import { SiProducthunt } from "react-icons/si";

const Sidebar = ({ menuClose }) => {
    const user = useSelector((state) => state.user);
    const [nom, setNom] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.user?.entreprise?.nom) {
            setNom(user.user.entreprise.nom);
        }
    }, [user]);

    useEffect(() => {
        if (nom) {
            const validateUrl = location.pathname.startsWith(`/entreprise/${nom}`);
            if (!validateUrl) {
                navigate("/se-connecter");
            }
        }
    }, [nom, location.pathname, navigate]);

    const menuItems = [
        { icon: <BiSolidDashboard />, label: 'Tableau de bord', path: `/entreprise/${nom}/admin` },
        { icon: <BiStoreAlt />, label: 'Boutique', path: `/entreprise/${nom}/boutique` },
        { icon: <SiProducthunt />, label: 'Produit', path: `/entreprise/${nom}/produit` },
        { icon: <BiAnalyse />, label: 'Analytique', path: `/entreprise/${nom}/analytique` },
        { icon: <BiMessageSquareDots />, label: 'Tickets', path: `/entreprise/${nom}/tickets` },
        { icon: <BiGroup />, label: 'Utilisateur', path: `/entreprise/${nom}/utilisateur` },
        { icon: <BiCog />, label: 'Paramètre', path: `/entreprise/${nom}/parametre` },
    ];

    return (
        <div className={`${styles.sidebar} ${menuClose ? styles.close : ''} sidebar`}>
            <a href="#" className={styles.logo}>
                <i className={styles.bx}><Logo /></i>
                <div className={styles.logoName}><span>Rai</span>tra</div>
            </a>
            <ul className={styles.sideMenu}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            <i className={styles.bx}>{item.icon}</i>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <ul className={styles.sideMenu}>
                <li>
                    <a href="#" className={styles.logout}>
                        <i className={styles.bx}><BiLogOutCircle /></i>Déconnexion
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
