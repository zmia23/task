import { userTypes } from '../actions/user-action-types'
import { UserState, UserActions } from '../actions/user-action-types'

const initState: UserState = {
  pending: false,
  users: [],
  error: null   
}

export const userReducer = (state = initState, action: UserActions) => {
  switch(action.type) {
    // All requests are managing pending flag in state. It could be optimized to one type that takes care of it.
    case userTypes.GET_USERS_REQUEST:
    case userTypes.POST_USER_REQUEST:
    case userTypes.PUT_USER_REQUEST:
    case userTypes.DELETE_USER_REQUEST:
      return {...state, pending: true, error: null}

    // Following cases manage data in state
    case userTypes.GET_USERS_SUCCESS:
      return { 
        ...state, 
        pending: false, 
        users: action.payload, 
        error: null
      }
    case userTypes.POST_USER_SUCCESS:
      return { 
        ...state, 
        pending: false, 
        users: [ ...state.users, action.payload ], 
        error: null 
      }
    case userTypes.PUT_USER_SUCCESS:
      const updatedUsers = state.users.map(user => user.id === action.payload.id ? action.payload : user)
      return { 
        ...state, 
        pending: false, 
        users: updatedUsers, 
        error: null 
      }
    case userTypes.DELETE_USER_SUCCESS:
      let deletedUsers = state.users.filter(user => user.id !== action.payload.id)
      return { 
        ...state, 
        pending: false, 
        users: deletedUsers, 
        error: null 
      }
    
    // Failed cases are manaing error value in the user store. It could be optimized to one type
    case userTypes.GET_USERS_FAILED:
    case userTypes.POST_USER_FAILED:
    case userTypes.PUT_USER_FAILED:
    case userTypes.DELETE_USER_FAILED:
      return { ...state, pending: false, error: action.payload.error };
    default:
      return state
  }
}