import {createSlice} from "@reduxjs/toolkit";

const ProductSlice = createSlice ({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        addAllProducts: (state,action)=>{
            state.products = action.payload
        },

    }
});

export const {addAllProducts } = ProductSlice.actions;
export default ProductSlice.reducer;