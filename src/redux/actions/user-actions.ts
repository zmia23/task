import { userTypes } from './user-action-types'

import { UserActions, User, UserError } from './user-action-types'

/** GET USERS ACTION */
export const getUsersRequest = () => ({
  type: userTypes.GET_USERS_REQUEST
})

export const getUsersSuccess = (payload: Array<User>) : UserActions => ({
  type: userTypes.GET_USERS_SUCCESS,
  payload
})

export const getUsersFailed = (payload: { error: string }): UserError => ({
  type: userTypes.GET_USERS_FAILED,
  payload
})

/** GET USER ACTION */
export const getUserRequest = (payload: { userId: string }) : UserActions => ({
  type: userTypes.GET_USER_REQUEST,
  payload
})

export const getUserSuccess = (payload: User) : UserActions => ({
  type: userTypes.GET_USER_SUCCESS,
  payload
})

export const getUserFailed = (payload: { error: string }): UserError => ({
  type: userTypes.GET_USER_FAILED,
  payload
})

/** CREATE USER ACTION */
export const createUserRequest = (payload: { name: string, email: string}) : UserActions => ({
  type: userTypes.POST_USER_REQUEST,
  payload
})

export const createUserSuccess = (payload: User): UserActions => ({
  type: userTypes.POST_USER_SUCCESS,
  payload
})

export const createUserFailed = (payload: { error: string }): UserError => ({
  type: userTypes.POST_USER_FAILED,
  payload
})


/** UPDATE USER ACTION */
export const updateUserRequest = (payload: User): UserActions => ({
  type: userTypes.PUT_USER_REQUEST,
  payload
})

export const updateUserSuccess = (payload: User): UserActions => ({
  type: userTypes.PUT_USER_SUCCESS,
  payload
})

export const updateUserFailed = (payload: { error: string }): UserError => ({
  type: userTypes.PUT_USER_FAILED,
  payload
})

/** DELETE USE ACTION */
export const deleteUserRequest = (payload: { id: string }): UserActions => ({
  type: userTypes.DELETE_USER_REQUEST,
  payload
})

export const deleteUserSuccess = (payload: User): UserActions => ({
  type: userTypes.DELETE_USER_SUCCESS,
  payload
})

export const deleteUserFailed = (payload: { error: string }): UserError => ({
  type: userTypes.DELETE_USER_FAILED,
  payload
})