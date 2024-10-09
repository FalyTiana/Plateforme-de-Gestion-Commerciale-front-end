import React, { useState } from "react";
import styles from "./Login.module.css";
import Header from "../../component/s-inscrire/header";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Veuillez entrer votre email et votre mot de passe.");
      return;
    }

    // TODO: Gérer la connexion de l'utilisateur (ex: API call)
    console.log("Email:", email);
    console.log("Password:", password);

    // Réinitialiser l'erreur après soumission réussie
    setError("");
  };

  return (
    <div className={styles.login}>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <h1>Connexion</h1>
          <p>Veuillez entrer vos informations</p>

          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className="btn">
              Se connecter
            </button>
          </form>

          {/* Lien de réinitialisation du mot de passe */}
          <p className={styles.forgotPassword}>
            <NavLink to="/">Mot de passe oublié ?</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
