import { EventConstants } from '../constants/event-constants'


export function categorySelector(payload) {

  return {
    type: EventConstants.SELECT_PRODUCT_CATEGORY,
    payload
  }

}