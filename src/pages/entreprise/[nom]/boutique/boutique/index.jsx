import { useEffect, useState } from "react";
import Header from "../../../../../component/entreprise/header"
import { breadcrumbItemsBoutique } from "../../../../../utils/breadcrumbItems"
import styles from "./Shop.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ButtonBasket from "../../../../../component/entreprise/shop/pannier/buttonBasket";
import EmptyState from "../../../../../component/emptyState";
import { addToCart } from "../../../../../redux/slices/cartSlice"
import SearchBar from "../../../../../component/SearchBar";
import CategoryFilter from "../../../../../component/CategoryFilter";
import ProductGrid from "../../../../../component/entreprise/ProductGrid";

function Shop() {

    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()


    // Mettre à jour les produits filtrés lorsqu'ils sont chargés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);


    const handleProductClick = (product) => {
        navigate(`${location.pathname}/produit`, { state: { product } })
    }

    // Ajouter un produit au panier
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <Header title={"Boutique"} breadcrumb={breadcrumbItemsBoutique} />
            <div className={styles.container}>
                <h1 className={styles.title}>Notre Boutique</h1>
                <ButtonBasket />

                <SearchBar products={products} setFiltered={setFilteredProducts}/>

                <CategoryFilter products={products} setFiltered={setFilteredProducts}/>

                {filteredProducts && filteredProducts.length === 0 ? (
                    <EmptyState message="Aucun produit trouvé." />
                ) :
                    ( <ProductGrid 
                    products={products} 
                    textHandleButton={"Ajouter au panier"} 
                    handleProductClick={handleProductClick}
                    handleButton={handleAddToCart}/>)}
            </div>
        </>
    )
}

export default Shop