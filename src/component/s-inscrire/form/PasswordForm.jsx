/* eslint-disable react/prop-types */

function PasswordForm({ formData, errors, handleInputChange, handlePasswordSubmit, none, styles }) {
    return (
        <form onSubmit={handlePasswordSubmit} className={`${styles.fromInput} ${!none && styles.none}`}>
            <input
                className={styles.input}
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={(e) => handleInputChange(e, "form")}
                required
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}

            <input
                className={styles.input}
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange(e, "form")}
                required
            />
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}

            <label className={styles.label}>
                <input
                    type="checkbox"
                    name="acceptedTerms"
                    checked={formData.acceptedTerms}
                    onChange={(e) => handleInputChange(e, "form")}
                />
                Accepter les conditions
            </label>
            {errors.acceptedTerms && <span className={styles.error}>{errors.acceptedTerms}</span>}
            <span className={styles.span}/>
            <button className="btn" type="submit">{"S'inscrire"}</button>
        </form>
    );
}

export default PasswordForm;
