/* eslint-disable react/prop-types */

function TogglePanel({ handleEntrepriseSubmit, styles }) {
    return (
        <div className={styles.toggleContainer}>
            <div className={styles.toggle}>
                <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                    <h1>Informations sur {"l'administrateur"}</h1>
                    <p className={styles.p}>
                        Veuillez saisir les informations personnelles de {"l'administrateur de l'entreprise"}.
                        Ces données sont nécessaires pour la gestion des accès et le bon fonctionnement de votre compte.
                    </p>
                    <button className={`btn btn2 ${styles.btn}`} onClick={handleEntrepriseSubmit}>Retour</button>
                </div>
                <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                    <h1>Bienvenue sur Raitra</h1>
                    <p className={styles.p}>
                        Veuillez renseigner avec soin les informations exactes de votre entreprise.
                        Ces données sont essentielles pour une gestion efficace de vos opérations commerciales.
                    </p>
                    <p>Merci de votre confiance.</p>
                </div>
            </div>
        </div>
    );
}

export default TogglePanel;
