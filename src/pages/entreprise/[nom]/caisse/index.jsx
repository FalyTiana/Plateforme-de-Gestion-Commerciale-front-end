import Header from "../../../../component/entreprise/header"
import { breadcrumbItemsBoutique } from "../../../../utils/breadcrumbItems"


function Caisse() {
    return (
        <>
        <Header title={"Boutique"} breadcrumb={breadcrumbItemsBoutique}/>
        </>
    )
}

export default Caisse