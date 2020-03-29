import { EventConstants } from '../constants/event-constants'

const initState = {
  orderId: '',
  items: [],
  status: 'unpaid'
}

const shoppingBagReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case EventConstants.ADD_TO_BAG:
      return {
        ...state, items: [...state.items, payload]
      }
    default:
      return state

  }

}

export default shoppingBagReducer;