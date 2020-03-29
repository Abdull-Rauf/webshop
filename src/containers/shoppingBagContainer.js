import { connect } from 'react-redux'
import shoppingBagScreen from '../screens/ShoppingBagScreen'




const mapStateToProps = state => {
  const { shoppingBagReducer } = state;

  return {
    items: shoppingBagReducer.items
  }
}

const ShoppingBag = connect(mapStateToProps, null)(shoppingBagScreen);

export default ShoppingBag;