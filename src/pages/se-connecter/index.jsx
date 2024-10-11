import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import Header from "../../component/s-inscrire/header";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../../api/auth/login";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation simple
    if (!email || !password) {
      setError("Veuillez entrer votre adresse email et votre mot de passe.");
      return;
    }

    try {
      await login(email, password, dispatch);
      // Rediriger l'utilisateur ou mettre à jour l'état de l'application
    } catch (error) {
      setError("Les informations d'identification sont incorrectes.");
    }

    // Réinitialiser l'erreur après soumission réussie
    setError("");
  };

  useEffect(()=>{
    if (user.user && user.token){
      navigate(`/entreprise/${user.user.entreprise.nom}/${user.user.post}`)
    }
    
  },[user, navigate])

  return (
    <div className={styles.login}>
      <Header />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h1>Connexion Employé</h1>
            <span>
              Veuillez saisir votre adresse email et votre mot de passe
            </span>
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <NavLink to="/" className={styles.forgotPassword}>
              Mot de passe oublié ?
            </NavLink>
            <button type="submit" className="btn">
              Se connecter
            </button>
          </form>
        </div>
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={styles.togglePanel}>
              <h1>Accès réservé</h1>
              <p>
                Cette zone est strictement réservée aux employés de
                l'entreprise. Si vous n'êtes pas employé, vous ne pouvez pas
                vous connecter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
