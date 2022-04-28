import {createSlice} from "@reduxjs/toolkit";

const ShopSlice = createSlice ({
    name: "shop",
    initialState: {
        shops: [],
    },
    reducers: {
        addAllShops: (state,action)=>{
            state.shops = action.payload
        },

    }
});

export const {addAllShops } = ShopSlice.actions;
export default ShopSlice.reducer;