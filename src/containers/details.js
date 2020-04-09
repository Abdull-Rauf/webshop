import { connect } from 'react-redux'
import addToBag from '../actions/addtoBag-action'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'


const mapDispatchToProps = (dispatch) => {

  return {
    addToBag: data => dispatch(addToBag(data))
  }

}

// From State to props // Receive value in component
// const mapStateToProps = state => {
//   const { productReducer } = state;

//   return {
//     productDetails: productReducer.selectedProduct

//   }
// }

// Connect to Redux

const ProductDetails = connect(null, mapDispatchToProps)(ProductDetailsScreen)

export default ProductDetails;
