import { useState } from "react";
import Header from "../../component/s-inscrire/header";
import styles from "./Register.module.css";
import { BsArrowLeftSquare } from "react-icons/bs";
import { handleAdminSubmit, handleEntrepriseSubmit, handleInputChange, handlePasswordSubmit, validatePasswordForm } from "../../utils/formHandlers"
import AdminForm from "../../component/s-inscrire/form/AdminForm";
import PasswordForm from "../../component/s-inscrire/form/PasswordForm";
import EntrepriseForm from "../../component/s-inscrire/form/EntrepriseForm";
import TogglePanel from "../../component/s-inscrire/TogglePanel";
import { useNavigate } from "react-router";

function Register() {

    const [active, setActive] = useState(false);
    const [none, setNone] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({ password: '', confirmPassword: '', acceptedTerms: false, });
    const [entrepriseData, setEntrepriseData] = useState({ nom: '', adresse: '', devise: '' });
    const [adminData, setAdminData] = useState({ nom: '', prenom: '', email: '', telephone: '' });

    const navigate = useNavigate();

    const handleNavLinkClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.register}>
            <Header handleNavLinkClick={handleNavLinkClick} />
            <div className={`${styles.container} ${active && styles.active}`}>
                <div className={`${styles.formContainer} ${styles.signUp}`}>
                    <button
                        className={styles.buttonReturn}
                        onClick={(e) => handleEntrepriseSubmit(e, entrepriseData, setActive, none, setNone)}>
                        <BsArrowLeftSquare />
                    </button>
                    <div className={styles.form}>
                        <h1>Créer un compte</h1>
                        <span className={styles.span}>Veuillez saisir les informations sur{" l'administrateur"}</span>
                        <AdminForm
                            adminData={adminData}
                            handleInputChange={(e) => handleInputChange(e, "admin", setAdminData, setFormData, setEntrepriseData)}
                            handleAdminSubmit={(e) => handleAdminSubmit(e, adminData, setNone)}
                            none={none}
                            styles={styles}
                        />
                        <PasswordForm
                            formData={formData}
                            errors={errors}
                            handleInputChange={(e) => handleInputChange(e, "form", setAdminData, setFormData, setEntrepriseData)}
                            handlePasswordSubmit={(e) => handlePasswordSubmit(e, formData, setErrors, validatePasswordForm, entrepriseData.nom, navigate)}
                            none={none}
                            styles={styles}
                        />
                    </div>
                </div>


                <div className={`${styles.formContainer} ${styles.signIn}`}>
                    <EntrepriseForm
                        styles={styles}
                        entrepriseData={entrepriseData}
                        handleInputChange={(e) => handleInputChange(e, "entreprise", setAdminData, setFormData, setEntrepriseData)}
                        handleEntrepriseSubmit={(e) => handleEntrepriseSubmit(e, entrepriseData, setActive)}
                    />
                </div>

                <TogglePanel styles={styles} handleEntrepriseSubmit={(e) => handleEntrepriseSubmit(e, entrepriseData, setActive, none, setNone)} />
            </div>
        </div>
    )
}

export default Register