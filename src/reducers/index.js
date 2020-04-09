import { combineReducers } from 'redux'
import productReducer from './product-reducer'
import shoppingBagReducer from './shoppingBag-reducer'


const rootReducer = combineReducers({ productReducer, shoppingBagReducer })

export default rootReducer;