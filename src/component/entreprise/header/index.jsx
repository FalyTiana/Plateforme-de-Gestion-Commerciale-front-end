/* eslint-disable react/prop-types */
import { useParams } from 'react-router';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Header = ({ title, breadcrumb }) => {
    const { nom } = useParams();
    const breadcrumbRef = useRef(null);

    const handleActiveCheck = () => {
        // Vérifier que breadcrumbRef.current n'est pas null
        if (breadcrumbRef.current) {
            // Récupérer tous les enfants du conteneur qui ont la classe 'active'
            const activeElements = breadcrumbRef.current.querySelectorAll('.active');

            if (activeElements.length === 2) {
                // Si 2 éléments ont la classe 'active', retirer la classe 'active' du premier
                activeElements[0].classList.remove('active');
            }
        }
    };

    // Utiliser useEffect pour vérifier les éléments actifs au montage
    useEffect(() => {
        handleActiveCheck();
    }, [breadcrumb]);

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <h1>{title}</h1>
                {breadcrumb && breadcrumb.length > 0 && (
                    <ul className={`${styles.breadcrumb} breadcrumb`} ref={breadcrumbRef}>
                        {breadcrumb.map((item, index) => {
                            // Remplacer :nom par la valeur réelle
                            const link = item.link.replace(':nom', nom);

                            return (
                                <li key={index}>
                                    <NavLink
                                        to={link}
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        {item.label}
                                    </NavLink>
                                    {index < breadcrumb.length - 1 && ' /'}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;
















//import { BiCloudDownload } from "react-icons/bi";
// import { useParams } from 'react-router';
// import styles from './Header.module.css';

// function Header() {

//     const { nom } = useParams()

//     console.log('====================================')
//     console.log(nom)
//     console.log('====================================')
//     return (
//         <div className={styles.header}>
//             <div className={styles.left}>
//                 <h1>Tableau de bord</h1>
//                 {/* <ul className={styles.breadcrumb}>
//                 <li><a href="#">Analytics</a></li>/
//                 <li><a href="#" className={styles.active}>Shop</a></li>
//             </ul> */}
//             </div>
//             {/* <a href="#" className={styles.report}>
//             <i className={styles.bx}><BiCloudDownload /></i>
//             <span>Télécharger CSV</span>
//         </a> */}
//         </div>
//     );
// }

// export default Header;

