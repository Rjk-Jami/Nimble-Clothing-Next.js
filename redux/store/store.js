import { configureStore } from "@reduxjs/toolkit";
import stateControllerReducer from "../utils/stateControllerSlice";
import authReducer from "../auth/authSlice";
import { rootApi } from "../api/rootApi";
import filterReducer from "../utils/filterSlice";
import storage from "redux-persist/lib/storage"; 
import { persistStore, persistReducer } from "redux-persist";
import  productReducer  from "../products/productSlice";
import  shippingAddressReducer  from "../shippingAddress/shippingAddressSlice";

import themeReducer  from "../theme/themeSlice"
const persistConfigForAuth = {
  key: "auth", 
  storage,
  whitelist: ["token", "user"], 
};
const persistConfigForProductsMaster = {
  key: 'productsMaster',
  storage, 

  whitelist: ['productCompare', 'productWishList', 'productsCart', 'totalPrice'], 
};
const persistConfigForTheme = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};
const persistConfigForShippingAddress = {
  key: "shippingAddress",
  storage,
  whitelist: ["town", "zipcode", "district", 'shippingCost'],
};

const persistedProductsMasterReducer = persistReducer(persistConfigForProductsMaster, productReducer);

const persistedAuthReducer = persistReducer(persistConfigForAuth, authReducer);
const persistedTheme = persistReducer(persistConfigForTheme, themeReducer);
const persistedShippingAddress = persistReducer(persistConfigForShippingAddress, shippingAddressReducer);

export const store = configureStore({
  reducer: {
    
    stateController: stateControllerReducer,
    [rootApi.reducerPath]: rootApi.reducer,
    auth: persistedAuthReducer, 
    filter: filterReducer,
    productsMaster:persistedProductsMasterReducer,
    theme:persistedTheme,
    shippingAddress: persistedShippingAddress
 },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these redux-persist actions
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(rootApi.middleware), 
});

export const persistor = persistStore(store);


// call refreshTokenMaster function to refresh token page load
const refreshTokenMaster = async () => {
    try {
        const res = await store.dispatch(rootApi.endpoints.refreshToken.initiate({}, { forceRefetch: true }));
        // console.log(res, "refreshTokenMaster");
    } catch (error) {
        console.log(error, "refreshTokenMaster");
    }
}
refreshTokenMaster();
