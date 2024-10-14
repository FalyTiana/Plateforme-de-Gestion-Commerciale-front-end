import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: "T-shirt",
            category: "vetements",
            price: 25000,
            inStock: true,
            image: "https://via.placeholder.com/200", // Image fictive
        },
        {
            id: 2,
            name: "Casque Bluetooth",
            category: "electronique",
            price: 75000,
            inStock: true,
            image: "https://via.placeholder.com/150", // Image fictive
        },
        {
            id: 3,
            name: "Sac à main",
            category: "accessoires",
            price: 40000,
            inStock: false,
            image: "https://via.placeholder.com/300", // Image fictive
        },
    ]
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})

export default productSlice.reducer