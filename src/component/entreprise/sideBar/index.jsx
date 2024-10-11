/* eslint-disable react/prop-types */
import { BiCodeAlt, BiSolidDashboard, BiStoreAlt, BiAnalyse, BiMessageSquareDots, BiGroup, BiCog, BiLogOutCircle } from "react-icons/bi";
import styles from './Sidebar.module.css';
import { NavLink, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../../logo";



const Sidebar = ({ menuClose }) => {

    const user = useSelector((state) => state.user);
    const [ nom, setNom ] = useState("");
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.user?.entreprise?.nom ) {
            setNom(user.user.entreprise.nom);
        }

        if (user?.user?.entreprise?.nom && user.user.post) {
            const validateUrl = `/entreprise/${user.user.entreprise.nom}/admin` === location.pathname && "admin" === user.user.post;

            if (!validateUrl) {
                navigate("/se-connecter");
            }
        } 
    }, [user.user]);

    const menuItems = [
        { icon: <BiSolidDashboard />, label: 'Tableau de bord', path: `/entreprise/${nom}/admin` },
        { icon: <BiStoreAlt />, label: 'Boutique', path: `/entreprise/${nom}/admin/boutique` },
        { icon: <BiAnalyse />, label: 'Analytique', path: `/entreprise/${nom}/admin/analytique` },
        { icon: <BiMessageSquareDots />, label: 'Tickets', path: `/entreprise/${nom}/admin/tickets` },
        { icon: <BiGroup />, label: 'Utilisateur', path: `/entreprise/${nom}/admin/utilisateur` },
        { icon: <BiCog />, label: 'Paramètre', path: `/entreprise/${nom}/admin/parametre` },
    ];
    
    return (
    <div className={`${styles.sidebar} ${menuClose ? styles.close : ''} sidebar`}>
        <a href="#" className={styles.logo}>
            {/* <i className={styles.bx}><BiCodeAlt /></i> */}
            <i className={styles.bx}><Logo /></i>
            <div className={styles.logoName}><span>Rai</span>tra</div>
        </a>
        <ul className={styles.sideMenu}>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.path}><i className={styles.bx}>{item.icon}</i>{item.label}</NavLink>
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
)};

export default Sidebar;


