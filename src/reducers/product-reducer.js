import { EventConstants } from '../constants/event-constants'


const initialState = {
  category: '',
  selectedProduct: {}
}

const productReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case EventConstants.SELECT_PRODUCT_CATEGORY:
      return {
        ...state, category: payload,
      }
    case EventConstants.SELECT_PRODUCT:
      return {

        ...state, selectedProduct: payload

      }

    default:
      return state
  }

}
export default productReducer;