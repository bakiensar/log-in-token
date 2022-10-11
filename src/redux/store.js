import { combineReducers, createStore } from 'redux'
import appDataReducer from './reducers/appDataReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  authState: authReducer,
  appDataState: appDataReducer,
})
const store = createStore(rootReducer)

export default store
