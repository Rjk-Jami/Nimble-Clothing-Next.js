import { configureStore } from "@reduxjs/toolkit";
import stateControllerReducer from "../utils/stateControllerSlice";
import authReducer from "../auth/authSlice";
import { rootApi } from "../api/rootApi";
import filterReducer from "../utils/filterSlice";
import storage from "redux-persist/lib/storage"; 
import { persistStore, persistReducer } from "redux-persist";


const persistConfig = {
  key: "auth", 
  storage,
  whitelist: ["token", "user"], 
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    stateController: stateControllerReducer,
    [rootApi.reducerPath]: rootApi.reducer,
    auth: persistedAuthReducer, 
    filter: filterReducer,
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
        console.log(res, "refreshTokenMaster");
    } catch (error) {
        console.log(error, "refreshTokenMaster");
    }
}
refreshTokenMaster();
