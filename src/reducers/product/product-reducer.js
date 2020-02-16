import { EventConstants } from '../../constants/event-constants'


const initialState = {
  category: ''
}

const productReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case EventConstants.SELECT_PRODUCT_CATEGORY:
      return {
        ...state, category: payload,
      }


    default:
      return state
  }

}
export default productReducer;