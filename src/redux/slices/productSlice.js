import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "T-shirt",
      category: "vetements",
      price: 25000,
      inStock: true,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Casque Bluetooth",
      category: "electronique",
      price: 75000,
      inStock: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sac à main",
      category: "accessoires",
      price: 40000,
      inStock: false,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Chaussures de sport",
      category: "vetements",
      price: 60000,
      inStock: true,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 5,
      name: "Montre connectée",
      category: "electronique",
      price: 120000,
      inStock: true,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Lunettes de soleil",
      category: "accessoires",
      price: 30000,
      inStock: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Enceinte portable",
      category: "electronique",
      price: 85000,
      inStock: true,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 8,
      name: "Jeans",
      category: "vetements",
      price: 55000,
      inStock: true,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 9,
      name: "Ordinateur portable",
      category: "electronique",
      price: 350000,
      inStock: false,
      image: "https://via.placeholder.com/400",
    },
    {
      id: 10,
      name: "Écharpe",
      category: "accessoires",
      price: 20000,
      inStock: true,
      image: "https://via.placeholder.com/150",
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
