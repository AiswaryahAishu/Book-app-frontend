import { createSlice } from '@reduxjs/toolkit';
import Swal from  'sweetalert2';

const initialState = {
    cartItems:[],
  }
 
  const cartSlice=createSlice({
    name: 'cart',
    initialState:initialState,
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(item => item._id === action.payload._id)
        if (!existingItem) {
            state.cartItems.push(action.payload)
            Swal.fire({
              title: "Product added to the cart",
              icon: "success",
              draggable: true
            });
        }else (
          Swal.fire({
            icon: "error",
            title: "Item already in the cart",
          })
        )
    },
    removeFromCart:(state, action) => {
      state.cartItems=state.cartItems.filter((item) =>item._id !== action.payload._id)
    },
    clearCart:(state, action) =>{
      state.cartItems=[]
    }


  }
  })

//   export the actions

export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;