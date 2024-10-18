import { useEffect, useState } from 'react'
import styles from './ListProduct.module.css'
import Header from '../../../../component/entreprise/header'
import { breadcrumbItemsProduit } from '../../../../utils/breadcrumbItems'
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../../../component/SearchBar';
import CategoryFilter from '../../../../component/CategoryFilter';
import EmptyState from '../../../../component/emptyState';
import ProductGrid from '../../../../component/entreprise/ProductGrid';
import { IoGrid, IoList } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import ProductList from '../../../../component/entreprise/ProductList';

function ListProduct() {

    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(products || []);
    const [viewMode, setViewMode] = useState('grid');
    // const navigate = useNavigate()
    // const location = useLocation()
    // const dispatch = useDispatch()


    // Mettre à jour les produits filtrés lorsqu'ils sont chargés
    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);


    const handleProductClick = (product) => {
        // navigate(`${location.pathname}/produit`, { state: { product } })
    }

    // Ajouter un produit au panier
    const handleAddToCart = (product) => {
        // dispatch(addToCart(product));
    };

    return (
        <>
            <Header title={"Produit"} breadcrumb={breadcrumbItemsProduit} />
            <div className={styles.container}>
                <h1 className={styles.title}>Liste des Produits</h1>

                <SearchBar products={products} setFiltered={setFilteredProducts} />

                <CategoryFilter products={products} setFiltered={setFilteredProducts} />

                {filteredProducts && filteredProducts.length === 0 ? (
                    <EmptyState message="Aucun produit trouvé." />
                ) :
                    (<div className={styles.ProduictsContainer}>
                        <div className={styles.buttonContenaire}>
                            <button className={viewMode === 'grid' ? styles.active : ''}
                                onClick={() => setViewMode('grid')}><IoGrid /> Grille</button>
                            <button className={viewMode === 'list' ? styles.active : ''}
                                onClick={() => setViewMode('list')}><FaList /> Liste</button>
                        </div>
                        <div>
                        {viewMode === 'grid' ? (
                                <ProductGrid
                                    products={filteredProducts}
                                    textHandleButton={"Modifier"}
                                    handleProductClick={handleProductClick}
                                    handleButton={handleAddToCart}
                                />
                            ) : (
                                <ProductList
                                    products={filteredProducts}
                                    textHandleButton={"Modifier"}
                                    handleProductClick={handleProductClick}
                                    handleButton={handleAddToCart}
                                />
                            )}
                        </div>
                    </div>)}

            </div>
        </>
    )
}

export default ListProduct