import { configureStore } from '@reduxjs/toolkit'
import productSlice from './Productslice'


export const store = configureStore({
  reducer: {
    product : productSlice
  },
})  