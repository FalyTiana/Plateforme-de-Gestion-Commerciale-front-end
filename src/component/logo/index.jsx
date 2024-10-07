import LogoBlack from '../../assets/images/logo-black.png';
import LogoWhite from '../../assets/images/logo-white.png';
import { useSelector } from "react-redux";

function Logo() {

    const theme = useSelector((state) => state.theme.theme);

    return (
        <img src={theme === 'light' ? LogoBlack : LogoWhite} alt="logo" />
    )
}

export default Logo