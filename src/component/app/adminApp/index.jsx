/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styles from './AdminApp.module.css';
import NavBar from '../../entreprise/navBar';
import Sidebar from '../../entreprise/sideBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Copyright from '../../copyright';
import Alert from '../../alert';


function AdminApp({ routing }) {
  const [menuClose, setMenuClose] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()

  const handleMenu = () => setMenuClose(!menuClose);

  // const handleSearchToggle = (e) => {
  //   if (windowWidth < 576) {
  //     e.preventDefault();
  //     setSearchOpen(!searchOpen);
  //   }
  // };

  useEffect(() => {
    const handleResize = () => {
      // setWindowWidth(window.innerWidth);
      setMenuClose(window.innerWidth < 768);
      if (window.innerWidth > 576) setSearchOpen(false);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!(user.user && user.token)) {
      navigate(`/se-connecter`)
    }

  }, [user, navigate])

  return (
    <>
      <div className={styles.body}>
        <Sidebar menuClose={menuClose} />
        <div className={`${styles.content} ${menuClose ? styles.close : ''}`}>
          <NavBar menuClose={menuClose} handleMenu={handleMenu} searchOpen={searchOpen} />
          <main>
            {routing}
          </main>
        </div>
      </div>
      <Alert />
      <Copyright />
    </>
  );
}

export default AdminApp;
