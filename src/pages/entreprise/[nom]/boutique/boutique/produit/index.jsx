import { useLocation, useNavigate, useParams } from "react-router";
import styles from "./Product.module.css"
import { breadcrumbItemsBoutique } from "../../../../../../utils/breadcrumbItems";
import Header from "../../../../../../component/entreprise/header";
import { formatNumber } from "../../../../../../utils/formatNumber";
import ButtonBasket from "../../../../../../component/entreprise/shop/pannier/buttonBasket";

function Product() {

    const newBeadcrumItems = [...breadcrumbItemsBoutique, { label: 'Produit', link: '/entreprise/:nom/boutique/boutique/produit' },]
    const location = useLocation();
    const navigate = useNavigate();
    const param = useParams();

    // Accès aux données envoyées
    const { product } = location.state || {};

    if (!product) {
        navigate(`/entreprise/${param.nom}/boutique/boutique`)
    }


    return (
        <>
            <Header title={"Boutique"} breadcrumb={newBeadcrumItems} />
            <div className={styles.container}>
            <ButtonBasket/>
                <h1>Produit</h1>
                <div className={styles.productContainer}>
                    <img src={product.image} alt="" />
                    <ul>
                        <li> <h3>Nom du produit</h3><span> {product.name}</span></li>
                        <li> <h3>Categorie</h3> <span> {product.category}</span> </li>
                        <li> <h3>Prix</h3> <span> {formatNumber(product.price)} Ar</span></li>
                    </ul>
                </div>
                <div className={styles.descrption}>
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptates voluptatibus. Delectus labore eligendi provident qui? Alias ipsum sit quisquam quod similique quaerat corporis, doloremque sequi, a ducimus, quis commodi?
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button>
                        Ajouter au panier
                    </button>
                    <button onClick={()=>navigate(`/entreprise/${param.nom}/boutique/boutique`)}>
                        Retour à la boutique
                    </button>
                </div>
            </div>
        </>
    )
}

export default Product