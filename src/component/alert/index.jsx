import { useEffect } from "react";
import styles from "./Alert.module.css";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { hideAlert } from "../../redux/slices/alertSlice";

function Alert() {
  const dispatch = useDispatch();
  const { isVisible, messageSuccess, messageError } = useSelector(
    (state) => state.alert
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  }, [dispatch, isVisible]);


  if (!isVisible) return null; // Ne rien afficher si l'alerte n'est pas visible

  return (
    <div className={styles.alert}>
      {messageSuccess && (
        <div className={`${styles.alertContent} ${styles.success}`}>
          <FaCheckCircle className={styles.alertIcon} />
          <p>{messageSuccess}</p>
        </div>
      )}
      {messageError && (
        <div className={`${styles.alertContent} ${styles.danger}`}>
          <FaExclamationTriangle className={styles.alertIcon} />
          <p>{messageError}</p>
        </div>
      )}
    </div>
  );
}

export default Alert;
