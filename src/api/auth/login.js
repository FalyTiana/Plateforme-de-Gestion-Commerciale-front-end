import axios from 'axios';
import urlBase from '../url';
import { setLoading } from '../../redux/slices/loadingSlice';
import { showError, showSuccess } from '../../redux/slices/alertSlice';
import { setUser } from '../../redux/slices/userSlice';

// Fonction pour se connecter
const login = async (email, motDePasse, dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(`${urlBase}/login`, {
            email,
            mot_de_passe: motDePasse,
        });
        
        dispatch(showSuccess('Connexion réussie.'));
        dispatch(setUser({ user: response.data.utilisateur, token: response.data.token }));
        return response.data;
    } catch (error) {

        const errorMessage = error.response?.data?.message || 'Une erreur s\'est produite lors de la connection.';
        dispatch(showError(errorMessage));
        throw error;
    } finally {
        dispatch(setLoading(false));
    }
};

export default login;