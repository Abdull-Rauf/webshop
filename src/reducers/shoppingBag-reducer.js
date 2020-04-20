import { EventConstants } from '../constants/event-constants'

const initState = {
  orderId: '',
  items: [],
  status: 'unpaid'
}

const shoppingBagReducer = (state = initState, { type, payload }) => {

  if (type === EventConstants.ADD_TO_BAG) {
    if (state.items.length > 0) {
      let product = state.items.find(item => item.id === payload.id)

      if (!product) {
        const newPayLoad = Object.assign({ total: 1 }, payload)

        return {
          ...state, items: [...state.items, newPayLoad]
        }
      }

      product.total += 1
      return {
        ...state
      }
    } else {
      const newPayLoad = Object.assign({ total: 1 }, payload)
      return {
        ...state, items: [...state.items, newPayLoad]
      }
    }
  }

  return state
}

export default shoppingBagReducer;