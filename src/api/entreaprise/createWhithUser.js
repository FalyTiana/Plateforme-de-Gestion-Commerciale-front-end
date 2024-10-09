import axios from 'axios';
import urlBase from '../url';

const createEntrepriseWithUser = async (entreprise, utilisateur) => {

    console.log(entreprise);
    
    if (!entreprise || !utilisateur) {
        throw new Error('Les informations de l\'entreprise ou de l\'utilisateur sont manquantes.');
    }

    try {
        const response = await axios.post(`${urlBase}/entreprise-avec-utilisateur`, {
            entreprise_nom: entreprise.nom || '',
            entreprise_pays: entreprise.pays || '',
            entreprise_ville: entreprise.ville || '',
            entreprise_devise: entreprise.devise || '',
            entreprise_abreviation_devise: entreprise.abreviation_devise || '',
            utilisateur_nom: utilisateur.nom || '',
            utilisateur_prenom: utilisateur.prenom || '',
            utilisateur_email: utilisateur.email || '',
            utilisateur_telephone: utilisateur.telephone || '',
            utilisateur_mot_de_passe: utilisateur.mot_de_passe || '',
            utilisateur_post: utilisateur.post || '',
        });

        console.log('Entreprise et utilisateur créés avec succès:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erreur lors de la création de l\'entreprise et de l\'utilisateur:', error.response.data);
        } else {
            console.error('Erreur de connexion ou autre problème:', error.message);
        }
        throw error;
    }
};

export default createEntrepriseWithUser;




// Exemple d'utilisation de la fonction
// const entrepriseData = {
//     nom: 'Nom de l\'entreprise',
//     pays: 'Pays',
//     ville: 'Ville',
//     numero_adresse: '123',
//     devise: 'Devise',
//     abreviation_devise: 'DEV',
// };

// const utilisateurData = {
//     nom: 'Nom de l\'utilisateur',
//     prenom: 'Prénom',
//     email: 'email@example.com',
//     telephone: '0123456789',
//     mot_de_passe: 'motdepasse',
//     post: 'Poste',
// };

// createEntrepriseWithUser(entrepriseData, utilisateurData);
