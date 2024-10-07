import { RiFacebookLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import styles from "./Footer.module.css";
import Logo from "../../logo";
import { Link } from "react-router-dom";

const socialLinks = [
    { icon: <RiFacebookLine />, url: "#" },
    { icon: <RiInstagramLine />, url: "#" },
    { icon: <RiTwitterXLine />, url: "#" }
];

const footerSections = [
    {
        title: "Compagnie",
        links: [
            { nom: "Entreprise", url: "#" },
            { nom: "Partenariat", url: "#" },
            { nom: "Réseau", url: "#" }
        ]
    },
    {
        title: "À prpos de nous",
        links: [
            { nom: "Blogs", url: "#" },
            { nom: "Chaînes", url: "#" },
            { nom: "Sponsors", url: "#" }
        ]
    },
    {
        title: "Contact",
        links: [
            { nom: "Nous contact", url: "#" },
            { nom: "Politique de confidentialité", url: "#" },
            { nom: "Termes & Conditions", url: "#" }
        ]
    }
];

function Footer() {
    return (
        <>
            <span className="blur"></span>
            <span className="blur"></span>

            <div>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <p className={styles.p}>Simplifiez votre gestion, boostez votre succés!</p>
                <div className={styles.socials}>
                    {socialLinks.map((social, index) => (
                        <Link className={styles.a} to={social.url} key={index}>
                            <i className={styles.i}>{social.icon}</i>
                        </Link>
                    ))}
                </div>
            </div>

            {footerSections.map((section, index) => (
                <div key={index}>
                    <h4 className={styles.h4}>{section.title}</h4>
                    {section.links.map((link, idx) => (
                        <Link className={styles.a1} to={link.url} key={idx}>{link.nom}</Link>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Footer;
