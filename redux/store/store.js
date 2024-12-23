import { configureStore } from "@reduxjs/toolkit";
import  stateControllerReducer  from "../utils/stateControllerSlice";
import  authReducer  from "../auth/authSlice";
import { rootApi } from "../api/rootApi";
import filterReducer  from "../utils/filterSlice";

export const store = configureStore({
    reducer: {
        stateController: stateControllerReducer,
        [rootApi.reducerPath] : rootApi.reducer,
        auth : authReducer,
        filter : filterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
    
  })

  