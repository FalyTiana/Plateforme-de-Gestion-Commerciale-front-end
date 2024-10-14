import axios from "axios";
import urlBase from "../url";
import { setLoading } from "../../redux/slices/loadingSlice";
import { showSuccess, showError } from "../../redux/slices/alertSlice";

const createEntrepriseWithUser = async (entreprise, utilisateur, dispatch) => {
    dispatch(setLoading(true));

    if (!entreprise || !utilisateur) {
        throw new Error(
            "Les informations de l'entreprise ou de l'utilisateur sont manquantes."
        );
    }

    try {
        const response = await axios.post(
            `${urlBase}/entreprise-avec-utilisateur`,
            {
                entreprise_nom: entreprise.nom || "",
                entreprise_pays: entreprise.pays || "",
                entreprise_ville: entreprise.ville || "",
                entreprise_devise: entreprise.devise || "",
                entreprise_abreviation_devise: entreprise.abreviation_devise || "",
                utilisateur_nom: utilisateur.nom || "",
                utilisateur_prenom: utilisateur.prenom || "",
                utilisateur_email: utilisateur.email || "",
                utilisateur_telephone: utilisateur.telephone || "",
                utilisateur_mot_de_passe: utilisateur.mot_de_passe || "",
                utilisateur_post: utilisateur.post || "",
            }
        );

        dispatch(showSuccess(response.data.message || "Création réussie."));
        return response.data;
    } catch (error) {
        const errorMessage =
            error.response?.data?.message ||
            "Une erreur s'est produite lors de la création.";
        dispatch(showError(errorMessage));

        throw error; // Optional: rethrow if you want to handle it further up the call stack
    } finally {
        dispatch(setLoading(false));
    }
};

export default createEntrepriseWithUser;
