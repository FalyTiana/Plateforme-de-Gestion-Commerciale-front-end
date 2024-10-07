import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from "../../redux/slices/themeSlice";
import styles from "./ButtonMode.module.css"

function ButtonMode() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };
    return (
        <button
            onClick={handleToggle}
            className={`btn btn2 ${styles.mode}`}>
            {theme === 'light' ? <RiMoonFill /> : <RiSunLine />}
        </button>
    )
}

export default ButtonMode