import { connect } from 'react-redux'
import { categorySelector, selectProduct } from '../actions/product-actions'
import ProductsScreen from '../screens/ProductsScreen'

// Dispatcher // sends value to store 
const mapDispatchToProps = (dispatch) => {

  return {
    changeProduct: data => dispatch(categorySelector(data)),
    selectProduct: data => dispatch(selectProduct(data))

  }
}

// From State to props // Receive value in component
const mapStateToProps = state => {
  const { categorySelectorReducer, productReducer } = state;

  return {
    productCategory: categorySelectorReducer.selectedCategory,
    productDetails: productReducer.selectedProduct

  }
}

// Connect to Redux
const ProductCategory = connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);

export default ProductCategory