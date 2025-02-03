import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
 })



//  steps 

// 1. create a store
// 2. wrap app component under provider 
// 3. create a slice 
// 4. register reducer in store 