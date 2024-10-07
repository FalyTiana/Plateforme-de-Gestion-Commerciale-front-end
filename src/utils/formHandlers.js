/* eslint-disable react-hooks/rules-of-hooks */

import { startTransition } from "react";

export const handleInputChange = (e, formType, setAdminData, setFormData, setEntrepriseData) => {
    const { name, value, type, checked } = e.target;
    if (formType === "admin") {
        setAdminData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    } else if (formType === "form") {
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    } else if (formType === "entreprise") {
        setEntrepriseData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
};

export const validatePasswordForm = (formData, setErrors) => {
    const newErrors = {};
    if (!formData.password) {
        newErrors.password = "* Le mot de passe est requis.";
    } else if (formData.password.length < 6) {
        newErrors.password = "* Le mot de passe doit comporter au moins 6 caractères.";
    }
    if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "* Les mots de passe ne correspondent pas.";
    }
    if (!formData.acceptedTerms) {
        newErrors.acceptedTerms = "* Vous devez accepter les conditions avant de continuer.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

export const handlePasswordSubmit = (e, formData, setErrors, validatePasswordForm,nomEntreprise , navigate) => {
    e.preventDefault();
    if (validatePasswordForm(formData, setErrors)) {
        startTransition(() => {
            navigate(`/entreprise/${nomEntreprise}/admin`);
        });

        // try {
        //     // Regroupement des données dans une seule requête
        //     const combinedData = {
        //         admin: adminData,
        //         entreprise: entrepriseData,
        //         password: formData.password,
        //     };

        //     // Requête API pour envoyer toutes les données en une seule fois
        //     const response = await axios.post('https://your-api-url.com/register', combinedData);
        //     console.log("Réponse de l'API :", response.data);

        //     // Navigation après la soumission réussie
        //     startTransition(() => {
        //         navigate(`/entreprise/${entrepriseData.nom}/admin`);
        //     });
        // } catch (error) {
        //     console.error("Erreur lors de l'envoi des données :", error);
        // }
    }
};

export const handleAdminSubmit = (e, adminData, setNone) => {
    e.preventDefault();
    console.log("Données administrateur:", adminData);
    setNone(true);
};

export const handleEntrepriseSubmit = (e, entrepriseData, setActive, none, setNone) => {
    e.preventDefault();
    console.log("Données entreprise:", entrepriseData);
    none? setNone(false) : setActive((prevActive) => !prevActive);
};
