import { connect } from 'react-redux'
import { categorySelector } from '../../actions/product-actions'
import ProductsScreen from '../../screens/ProductsScreen'

// Dispatcher
const mapDispatchToProps = (dispatch) => {

  return {
    changeProduct: data => dispatch(categorySelector(data))
  }
}

// From State to props
const mapStateToProps = state => {
  const { categorySelectorReducer } = state;

  return {
    products: categorySelectorReducer.selectedCategory
  }
}

// Connect to Redux
const Product = connect(mapStateToProps, mapDispatchToProps)(ProductsScreen)

export default Product;