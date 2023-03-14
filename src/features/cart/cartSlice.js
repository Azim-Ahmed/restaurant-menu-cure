import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  message: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        // console.log("action payload is : ", action)
      // Find product that already exist in the cart
      const product = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        // If product already exist then update the product quantity
        product.food_qty += 1;
        state.message = 'Product Quantity Updated';
      } else {
        // Otherwise, push the product into the cart
        const p ={
            ...action.payload,
            food_qty:1
        }
        // console.log("added product is : ", p)
        state.cart.push(p);
        state.message = 'Product Added To Cart';
      }
    },
    removeFromCart: (state, action) => {
      // Remove product from the cart
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.message = 'Product Removed From The Cart';
    },
    decreaseProductQuantity: (state, action) => {
      // Find product that already exist in the cart
      const product = state.cart.find(
        (item) => item.id === action.payload.id
      );

      // Check product quantity greater than 1
      if (product?.food_qty > 1) {
        product.food_qty -= 1;
        state.message = 'Product Quantity Updated';
      } else {
        // Remove product from the cart
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.message = 'Product Removed From The Cart';
      }
    },
    resetCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, decreaseProductQuantity, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
