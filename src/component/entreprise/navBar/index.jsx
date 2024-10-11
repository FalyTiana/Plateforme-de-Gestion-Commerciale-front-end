/* eslint-disable react/prop-types */
import { BiSearch, BiXCircle, BiBell } from "react-icons/bi";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import styles from "./NavBar.module.css";
import ButtonMode from "../../theme-mode/ButtonMode";

const NavBar = ({ menuClose, handleMenu, searchOpen, handleSearchToggle }) => (
  <nav className={`${styles.nav} ${menuClose ? styles.close : ""} navAdmin`}>
    <div className={styles.div}>
      <i className={`${styles.bx} ${styles.bxMenu}`} onClick={handleMenu}>
        {menuClose ? <RiMenuFold2Fill /> : <RiMenuFoldFill />}
      </i>
      <form action="#" className={searchOpen ? styles.show : ""}>
        <div className={`${styles.formInput} ${searchOpen ? styles.show : ""}`}>
          <input type="search" placeholder="Rechercher..." />
          <button className={styles.searchBtn} onClick={handleSearchToggle}>
            <i className={styles.bx}>
              {searchOpen ? <BiXCircle /> : <BiSearch />}
            </i>
          </button>
        </div>
      </form>
    </div>
    <div className={styles.div}>
      <a href="#" className={`${styles.notif} ${searchOpen ? styles.show2 : ""}`}>
        <i className={styles.bx}>
          <BiBell />
        </i>
        <span className={styles.count}>12</span>
      </a>
      <a href="#" className={`${styles.profile} ${searchOpen ? styles.show2 : ""}`}>
        <img src="images/logo.png" alt="profile" />
      </a>
      <ButtonMode/>
    </div>
  </nav>
);

export default NavBar;
