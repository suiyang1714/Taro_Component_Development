import { combineReducers } from 'redux'
const GLOBAL_STATE = {
  init: {}
}

function globalData (state = GLOBAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  globalData
})
