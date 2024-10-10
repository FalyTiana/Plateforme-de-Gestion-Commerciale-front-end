import axios from 'axios';

const logout = async (dispatch) => {

    dispatch(setLoading(true));

    try {
        const token = localStorage.getItem('token');
        
        if (!token) {
            throw new Error('Utilisateur non connecté.');
        }

        await axios.post(`${API_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Retirer le token du stockage local
        localStorage.removeItem('token');
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        throw error;
    }finally {
        dispatch(setLoading(false));
    }
}

export default logout