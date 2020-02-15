import { createStore } from 'redux'

const testReducer = (state = {}, action) => {

  return {
    ...state,
    testValue: 'Hello World',
  }

}

const store = createStore(
  testReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()