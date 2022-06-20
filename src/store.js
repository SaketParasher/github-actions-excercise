import { configureStore } from '@reduxjs/toolkit'
import { ExcerciseAPI } from './API/APISlice'

const store = configureStore({
    reducer:{
        [ExcerciseAPI.reducerPath]:ExcerciseAPI.reducer
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(ExcerciseAPI.middleware)
})

export default store;