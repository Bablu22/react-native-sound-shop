import { combineReducers, configureStore, } from '@reduxjs/toolkit'
import productsReducer from "../store/productSlice"
import cartReducer from "../store/CartSlice"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['products'],
    version: 1
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

const cartPersistReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: cartPersistReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})


export default store

