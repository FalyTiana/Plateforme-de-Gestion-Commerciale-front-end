import styles from './AddProduct.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from '../../../../../component/entreprise/header'
import { breadcrumbItemsProduit } from '../../../../../utils/breadcrumbItems'
import { useEffect, useRef, useState } from 'react';
import addImg from "../../../../../assets/images/addImage.png"
import { FaImage } from 'react-icons/fa';
import DynamicForm from '../../../../../component/entreprise/dynamicTableForm/dynamicForm';
//import DynamicTableForm from '../../../../../component/entreprise/dynamicTableForm';

function AddProduct() {

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        inStock: 'yes',
        image: null,
        description: '',
        unit: {
            name: '',
            symbol: ''
        }
    });

    const [imagePreview, setImagePreview] = useState('')

    const modules = {
        toolbar: [

            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],        // toggled

            [{ 'color': [] }, { 'background': [] }],

            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['code-block', 'link', 'image', 'video', 'formula'],

            ['clean']                                         // remove formatting button
        ],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes("unit.")) {
            const key = name.split(".")[1];
            setProduct({
                ...product,
                unit: { ...product.unit, [key]: value }
            });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const quillRef = useRef(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setProduct(prevProduct => ({ ...prevProduct, image: file }));
            setImagePreview(URL.createObjectURL(file));
        } else {
            alert('Veuillez télécharger un fichier image valide.');
            setProduct(prevProduct => ({ ...prevProduct, image: null }));
            setImagePreview("");
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
                                <label htmlFor="image" className={styles.imageLabel}>
                                    {imagePreview ? (
                                        <img
                                            src={imagePreview}
                                            alt="Aperçu du produit"
                                        />
                                    ) :
                                        <div className={styles.videLabelImage}>
                                            <img src={addImg} alt="ajout un produit" />
                                            <span><FaImage /> {"Cliquez ici pour choisir l'image du produit"}</span>
                                        </div>}
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
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
                            <div className={styles.priceContainer}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="price">Prix (Ar) :</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={product.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="unit.name"> Unité de mesure :</label>
                                        <input
                                            type="text"
                                            id="unit.name"
                                            name="unit.name"
                                            value={product.unit.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="unit.symbol">Symbole :</label>
                                        <input
                                            type="text"
                                            id="unit.symbol"
                                            name="unit.symbol"
                                            value={product.unit.symbol}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.settingProduct}>
                        <div className={`${styles.formGroup} ${styles.selectContainer}`}>
                            <label htmlFor="inStock">Besoin de stocker</label>
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
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description :</label>
                        <ReactQuill
                            placeholder='description'
                            ref={quillRef}
                            value={product.description}
                            onChange={handleDescriptionChange}
                            modules={modules}
                            className={styles.editor}
                        />
                    </div >

                    <div className={styles.formGroup}>
                        <DynamicForm/>
                    </div>

                    <button type="submit" className={styles.submitButton}>Ajouter le produit</button>
                </form>
            </div>
        </>
    )
}

export default AddProduct