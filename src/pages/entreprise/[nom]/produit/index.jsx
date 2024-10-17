import { useEffect, useState } from 'react'
import styles from './ListProduct.module.css'
import Header from '../../../../component/entreprise/header'
import { breadcrumbItemsProduit } from '../../../../utils/breadcrumbItems'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../../../component/SearchBar';
import CategoryFilter from '../../../../component/CategoryFilter';
import EmptyState from '../../../../component/emptyState';
import ProductGrid from '../../../../component/entreprise/ProductGrid';

function ListProduct() {

    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    // const navigate = useNavigate()
    // const location = useLocation()
    const dispatch = useDispatch()


    // Mettre à jour les produits filtrés lorsqu'ils sont chargés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);


    const handleProductClick = (product) => {
        // navigate(`${location.pathname}/produit`, { state: { product } })
    }

    // Ajouter un produit au panier
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <>
            <Header title={"Produit"} breadcrumb={breadcrumbItemsProduit} />
            <div className={styles.container}>
                <h1 className={styles.title}>Liste des Produits</h1>

                <SearchBar products={products} setFiltered={setFilteredProducts}/>

                <CategoryFilter products={products} setFiltered={setFilteredProducts}/>

                {filteredProducts && filteredProducts.length === 0 ? (
                    <EmptyState message="Aucun produit trouvé." />
                ) :
                    ( <ProductGrid 
                    products={products} 
                    textHandleButton={""} 
                    handleProductClick={handleProductClick}
                    handleButton={handleAddToCart}/>)}

            </div>
        </>
    )
}

export default ListProduct