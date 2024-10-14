import Header from "../../../../component/entreprise/header"
import CallToActionForPromotions from "../../../../component/entreprise/shop/home/CallToActionForPromotions"
import Banner from "../../../../component/entreprise/shop/home/banner"
import PopularProductGrid from "../../../../component/entreprise/shop/home/popularProductGrid"
import ButtonBasket from "../../../../component/entreprise/shop/pannier/buttonBasket"
import { breadcrumbItemsBoutique } from "../../../../utils/breadcrumbItems"
import styles from "./Home.module.css"

function Home () {
    return (
        <>
        <Header title={"Boutique"} breadcrumb={breadcrumbItemsBoutique}/>
        <div className={styles.container}>
            <ButtonBasket/>
            <Banner/>
            <PopularProductGrid/>
            <CallToActionForPromotions/>
        </div>
        </>
    )
}

export default Home