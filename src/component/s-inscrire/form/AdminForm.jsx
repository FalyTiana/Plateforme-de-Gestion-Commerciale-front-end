/* eslint-disable react/prop-types */

function AdminForm({ adminData, handleInputChange, handleAdminSubmit, none, styles }) {
    return (
        <form onSubmit={handleAdminSubmit} className={`${styles.fromInput} ${none && styles.none}`}>
            {["nom", "prenom", "email", "telephone"].map((field) => (
                <input
                    key={field}
                    className={styles.input}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={adminData[field]}
                    onChange={(e) => handleInputChange(e, "admin")}
                    required
                />
            ))}
            <span className={styles.span} />
            <button className="btn" type="submit">Continuer</button>
        </form>
    );
}

export default AdminForm;
