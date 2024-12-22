import { configureStore } from "@reduxjs/toolkit";
import  stateControllerReducer  from "../utils/stateControllerSlice";
import  authReducer  from "../auth/authSlice";
import { rootApi } from "../api/rootApi";

export const store = configureStore({
    reducer: {
        stateController: stateControllerReducer,
        [rootApi.reducerPath] : rootApi.reducer,
        auth : authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
    
  })

  