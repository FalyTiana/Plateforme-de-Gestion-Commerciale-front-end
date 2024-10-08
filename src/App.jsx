//import styles from'./App.module.css'
import { useRoutes } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // Ajout de useSelector
import { useEffect } from "react";
import { setTheme } from "./redux/slices/themeSlice";
import routes from "~react-pages";
import NotFound from "./component/not-found/NotFound";
import Copyright from "./component/copyright";
import LoadingSpinner from "./component/loading/LoadingSpinner";
import Alert from "./component/alert";
import { setUser } from "./redux/slices/userSlice";

function App() {
  const routing = useRoutes([...routes, { path: "*", element: <NotFound /> }]);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const validThemes = ["light", "dark"];
    const savedTheme = localStorage.getItem("theme");
    const themeToApply = validThemes.includes(savedTheme)
      ? savedTheme
      : "light";
    dispatch(setTheme(themeToApply));

    const savedUser = JSON.parse(localStorage.getItem("user"));
    const savedToken = JSON.parse(localStorage.getItem("token"));
    if (savedUser && savedToken) {
      dispatch(setUser({ user: savedUser, token: savedToken }));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {routing}
      <Alert />
      <Copyright />
    </>
  );
}

export default App;
