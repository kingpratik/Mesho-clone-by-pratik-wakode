import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    products: [],
    userInfo: [],
}


export const  meeshoSlice = createSlice({
    name: "meeshoSlice",
    initialState,

    reducers: {

        addToCart:(state, action) => {
            item = state.products.find(() => item.id === action.payLoad.find)
            if(item){
               
                item.quantity += action.payload.quantity;
            }else(
                state.products.push(action.payLoad)
            )


        }
    }
});

export const { addToCart } = meeshoSlice.actions;
export default meeshoSlice.reducer;