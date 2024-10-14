//import styles from'./App.module.css'
import { useMatch, useRoutes } from "react-router";
import { useDispatch, useSelector } from "react-redux"; // Ajout de useSelector
import { useEffect } from "react";
import { setTheme } from "./redux/slices/themeSlice";
import routes from "~react-pages";
import NotFound from "./component/not-found/NotFound";
import Copyright from "./component/copyright";
import LoadingSpinner from "./component/loading/LoadingSpinner";
import Alert from "./component/alert";
import AdminApp from "./component/app/adminApp";

function App() {
  const routing = useRoutes([...routes, { path: "*", element: <NotFound /> }]);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);
  const isAdminRoute = useMatch("/entreprise/:nom/*");


  useEffect(() => {
    const validThemes = ["light", "dark"];
    const savedTheme = localStorage.getItem("theme");
    const themeToApply = validThemes.includes(savedTheme)
      ? savedTheme
      : "light";
    dispatch(setTheme(themeToApply));
  }, [dispatch]);

  if (isAdminRoute) {
    return <AdminApp routing={routing} />
  }

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
