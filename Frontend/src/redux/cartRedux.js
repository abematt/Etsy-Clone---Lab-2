import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total:0,
    },
    reducers: {
        addProduct: (state,action)=>{
            state.quantity  = state.quantity + 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        removeAllProducts: (state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        addProductQuantity: (state,action)=>{
            let newState = [...state.products]
            newState.map(product => {
                if(product._id === action.payload._id){
                    product.quantity = product.quantity + 1
                    return action.payload
                }
                return product
            })
            state.products = newState
            state.total += action.payload.price;
        },
        removeProductQuantity: (state,action)=>{
            let newState = [...state.products]
            newState.map(product => {
                if(product._id === action.payload._id){
                    product.quantity = product.quantity - 1
                    return action.payload
                }
                return product
            })
            state.products = newState
            state.total -= action.payload.price;
        },
        deleteProduct: (state,action) => {
            state.products.splice(
                state.products.findIndex((item)=>item._id===action.payload._id),1
            )
            state.quantity = state.quantity -1 
            // state.total -= action.payload.price;

        }
    },
});

export const {addProduct,removeAllProducts,addProductQuantity,removeProductQuantity,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;