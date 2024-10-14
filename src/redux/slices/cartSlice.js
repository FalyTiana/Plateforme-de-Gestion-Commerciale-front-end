import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  cartItems: [],  // Liste des articles dans le panier
  totalQuantity: 0,
  totalPrice: 0,
};

// Fonction pour recalculer le total des articles et le prix total
const calculateTotals = (cartItems) => {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.quantity * item.price;
  });

  return { totalQuantity, totalPrice };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find((product) => product.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // Recalculer les totaux après l'ajout d'un article
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

      // Recalculer les totaux après la suppression d'un article
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      // Recalculer les totaux après la mise à jour de la quantité
      const totals = calculateTotals(state.cartItems);
      state.totalQuantity = totals.totalQuantity;
      state.totalPrice = totals.totalPrice;
    },
    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
