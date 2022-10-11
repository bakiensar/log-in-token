const initialState = {
  token: null,
}

export const SET_TOKEN = 'set_token'
export const REMOVE_TOKEN = 'remove_token'

export const setToken = (dispatch, value) => {
  dispatch({
    type: 'set_token',
    payload: { token: value },
  })
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set_token':
      return {
        ...state,
        token: action.payload.token,
      }

    case 'remove_token':
      return {
        ...state,
        token: null,
      }

    default:
      return state
  }
}

export default authReducer
