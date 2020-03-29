import { combineReducers } from 'redux'
import productReducer from './product-reducer'
import categorySelectorReducer from './categorySelector-reducer'
import shoppingBagReducer from './shoppingBag-reducer'


const rootReducer = combineReducers({ productReducer, categorySelectorReducer, shoppingBagReducer })

export default rootReducer;