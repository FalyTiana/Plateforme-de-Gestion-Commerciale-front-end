import styles from './AddProduct.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../../../../component/entreprise/header'
import { breadcrumbItemsProduit } from '../../../../../utils/breadcrumbItems'
import { useEffect, useState } from 'react';

function AddProduct() {

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        inStock: 'yes',
        image: null,
        description: '',
    });

    const [imagePreview, setImagePreview] = useState('')

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }], // Ajout des options de couleur
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean'], // Supprime les styles
        ],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });

        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) { // Validation du type d'image
            setProduct({ ...product, image: file });
            setImagePreview(URL.createObjectURL(file));
        } else {
            alert('Veuillez télécharger un fichier image valide.');
            setProduct({ ...product, image: null });
        }
    };

    const handleDescriptionChange = (value) => {
        setProduct({ ...product, description: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Produit ajouté :', product);
        // Vous pouvez ici envoyer les données du produit au backend
    };

    useEffect(() => {
        if (!product.image) {
            setImagePreview("")
        }

    }, [product.image])


    return (
        <>
            <Header title={"Produit"} breadcrumb={breadcrumbItemsProduit} />
            <div className={styles.container}>
                <h1 className={styles.title}>Ajouter un produit</h1>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.formheader}>

                        <div className={styles.imageContenaire}>
                            <div className={styles.formGroup}>
                                <label htmlFor="image"><p>Image du produit :</p>
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Aperçu du produit"
                                        />
                                    ) : ("")}</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.rightImage}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nom du produit :</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={product.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="category">Catégorie :</label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={product.category}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="price">Prix (Ar):</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={product.price}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                        </div>


                    </div>

                    
                    <div className={styles.formGroup}>
                        <label htmlFor="inStock">En stock :</label>
                        <select
                            id="inStock"
                            name="inStock"
                            value={product.inStock}
                            onChange={handleInputChange}
                        >
                            <option value="yes">Oui</option>
                            <option value="no">Non</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description :</label>
                        <ReactQuill
                            value={product.description}
                            onChange={handleDescriptionChange}
                            modules={modules}
                            className={styles.editor}
                        />
                    </div>

                    <button type="submit" className={styles.submitButton}>Ajouter le produit</button>
                </form>
            </div>
        </>
    )
}

export default AddProduct