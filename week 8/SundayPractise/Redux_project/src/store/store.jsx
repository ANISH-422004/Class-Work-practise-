    import { configureStore } from '@reduxjs/toolkit'
    import Productreducer from './Reducers/ProducstsSlice'
    export const store = configureStore({
    reducer: {
        product :  Productreducer ,
        
    }
    })