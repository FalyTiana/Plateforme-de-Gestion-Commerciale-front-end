/* eslint-disable react/prop-types */

function EntrepriseForm({ entrepriseData, handleInputChange, handleEntrepriseSubmit, styles }) {
    return (
        <form className={styles.form} onSubmit={handleEntrepriseSubmit}>
            <h1>Créer un compte</h1>
            <span className={styles.span}>Veuillez saisir les informations de {"l'entreprise"}</span>
            {["nom", "adresse"].map((field) => (
                <input
                    key={field}
                    className={styles.input}
                    type="text"
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={entrepriseData[field]}
                    onChange={(e) => handleInputChange(e, "entreprise")}
                    required
                />
            ))}
            <select
                className={`${styles.input} ${styles.select} ${!entrepriseData.devise && styles.selectColor}`}
                id="currency"
                name="devise"
                value={entrepriseData.devise}
                onChange={(e) => handleInputChange(e, "entreprise")}
                required
            >
                <option value="" disabled hidden>Choisir une devise...</option>
                <option value="ariary">Ariary (MGA)</option>
                <option value="euro">Euro (EUR)</option>
                <option value="dollar">Dollar (USD)</option>
            </select>
            <span className={styles.span} />
            <button className="btn" type="submit">Continuer</button>
        </form>
    );
}

export default EntrepriseForm;
