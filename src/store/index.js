import {configureStore} from "@reduxjs/toolkit";
import productsInCartReducer from "./productsInCartReducer";
import productsListReducer from "./productsListReducer";

export const store = configureStore({
        reducer: {
            productsInCart: productsInCartReducer,
            productsList: productsListReducer
        }
    }
)
