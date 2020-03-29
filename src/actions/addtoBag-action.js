import { EventConstants } from '../constants/event-constants'

export default function addToBag(payload) {

  return {
    type: EventConstants.ADD_TO_BAG,
    payload
  }

}