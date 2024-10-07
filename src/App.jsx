//import styles from'./App.module.css'
import { useRoutes } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from './redux/slices/themeSlice';
import routes from '~react-pages'
import NotFound from './component/not-found/NotFound';
import Copyright from './component/copyright'


function App() {

  const routing = useRoutes([
    ...routes,
    { path: '*', element: <NotFound /> }
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    const validThemes = ['light', 'dark'];
    const savedTheme = localStorage.getItem('theme');
    const themeToApply = validThemes.includes(savedTheme) ? savedTheme : 'light';
    dispatch(setTheme(themeToApply));
  }, [dispatch]);

  return (
    <>
      {routing}
      <Copyright/>
    </>
  )
}

export default App
