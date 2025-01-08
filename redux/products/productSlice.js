import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCompare: [],
  productWishList: [],
  productsCart: [],
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "productsMaster",
  initialState,
  reducers: {
    
    userAddToCart: (state, action) => {
      const { product_id, size, quantity, price,image ,name} = action.payload;

      const existingProduct = state.productsCart.find(
        (item) => item.product_id === product_id && item.size === size
      );

      if (existingProduct) {
        // If product already exists, increase the quantity
        existingProduct.quantity += quantity;
      } else {
        // Otherwise, add the product to the cart
        state.productsCart.push({ product_id, size, quantity, price, image, name });
      }

      // Recalculate the total price
      state.totalPrice = state.productsCart.reduce((total, product) => {
        return total + product.quantity * product.price;
      }, 0);
    },
    //   dispatch(userAddToCart({ product_id: 1, size: "M", quantity: 2, price: 20 }));
 
    userRemoveFromCart: (state, action) => {
        const { product_id, size } = action.payload;
      
        // Remove the product from the cart based on _id and size
        state.productsCart = state.productsCart.filter(
          (item) => !(item._id === product_id && item.size === size)
        );
      
        // Recalculate the total price after removing an item
        state.totalPrice = state.productsCart.reduce((total, product) => {
          return total + product.quantity * product.price;
        }, 0);
      },

    // dispatch(userRemoveFromCart({ product_id, size }));

    userAddCompare: (state, action) => {
      const product_id = action.payload;
      if (!state.productCompare.includes(product_id)) {
        state.productCompare.push(product_id);
      }
    },
    userAddWishList: (state, action) => {
      const product_id = action.payload;
      if (!state.productWishList.includes(product_id)) {
        state.productWishList.push(product_id);
      }
    },
    userDeleteCompare: (state, action) => {
      const product_id = action.payload;
      state.productCompare = state.productCompare.filter(
        (id) => id !== product_id
      );
    },
    userDeleteWhishList: (state, action) => {
      const product_id = action.payload;
      state.productWishList = state.productWishList.filter(
        (id) => id !== product_id
      );
    },
    userDeleteAllCompare: (state, action) => {
      state.productCompare = [];
    },
    userDeleteAllWhishList: (state, action) => {
      state.productWishList = [];
    },
  },
});

export const {
  userAddToCart,
  userRemoveFromCart,
  userAddCompare,
  userAddWishList,
  userDeleteCompare,
  userDeleteWhishList,
  userDeleteAllCompare,
  userDeleteAllWhishList,
} = productSlice.actions;

export default productSlice.reducer;
