/* eslint-disable no-unused-vars */

import createEntrepriseWithUser from "../api/entreaprise/createWhithUser";

const currencyAbbreviations = {
  ariary: "MGA",
  euro: "EUR",
  dollar: "USD",
};

export const handleInputChange = (
  e,
  formType,
  setAdminData,
  setFormData,
  setEntrepriseData
) => {
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
    setEntrepriseData((prevState) => {
      const updatedData = {
        ...prevState,
        [name]: value,
      };
      if (name === "devise") {
        updatedData.abreviation_devise = currencyAbbreviations[value];
      }
      return updatedData;
    });
  }
};

export const validatePasswordForm = (formData, setErrors) => {
  const newErrors = {};
  if (!formData.password) {
    newErrors.password = "* Le mot de passe est requis.";
  } else if (formData.password.length < 6) {
    newErrors.password =
      "* Le mot de passe doit comporter au moins 6 caractères.";
  }
  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "* Les mots de passe ne correspondent pas.";
  }
  if (!formData.acceptedTerms) {
    newErrors.acceptedTerms =
      "* Vous devez accepter les conditions avant de continuer.";
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

export const handlePasswordSubmit = async (
  e,
  formData,
  setErrors,
  validatePasswordForm,
  entrepriseData,
  adminData,
  navigate,
  dispatch
) => {
  e.preventDefault();
  if (validatePasswordForm(formData, setErrors)) {
    const entreprise = {
      nom: entrepriseData.nom,
      pays: entrepriseData.pays,
      ville: entrepriseData.ville,
      devise: entrepriseData.devise,
      abreviation_devise: entrepriseData.abreviation_devise,
    };

    const utilisateur = {
      nom: adminData.nom,
      prenom: adminData.prenom,
      email: adminData.email,
      telephone: adminData.telephone,
      mot_de_passe: formData.password,
      post: "admin",
    };

    try {
      await createEntrepriseWithUser(entreprise, utilisateur, dispatch);

      navigate("/se-connecter"); // Redirige vers une page de succès après la création
    } catch (error) {
      setErrors({
        submit:
          "Erreur lors de la création de l'entreprise et de l'utilisateur.",
      });
    }
  }
};

export const handleAdminSubmit = (e, setNone) => {
  e.preventDefault();
  setNone(true);
};

export const handleEntrepriseSubmit = (e, setActive, active, none, setNone) => {
  e.preventDefault();
  console.log('====================================')
  console.log("ato")
  console.log('====================================')
  none ? setNone(false) : setActive((active) => !active);
};
