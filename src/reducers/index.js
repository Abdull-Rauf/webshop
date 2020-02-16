import { combineReducers } from 'redux'
import productReducer from './product/product-reducer'
import categorySelectorReducer from './category-selector/categorySelector-reducer'


const rootReducer = combineReducers({ productReducer, categorySelectorReducer })

export default rootReducer;