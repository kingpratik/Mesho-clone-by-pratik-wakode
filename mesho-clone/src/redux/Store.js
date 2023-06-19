import { configureStore } from '@reduxjs/toolkit'
import meeshoReducer from "../redux/meeshoSlice"

export const store = configureStore({
  reducer: {
    meesho: meeshoReducer,
  },
})