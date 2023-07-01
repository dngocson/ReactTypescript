import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Cartstate } from "../../type/type";
import { RootState } from "../../store/store";
const initialState = {
  cart: [],
} as Cartstate;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: Cartstate, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
    },
    deleteItem(state: Cartstate, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state: Cartstate, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state: Cartstate, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    clearCart(state: Cartstate) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  clearCart,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
export const getCart = (state: RootState) => state.cart.cart;

export const getCurrentQuantitybyId = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
