export enum userTypes {
  GET_USERS_REQUEST = 'GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_USERS_FAILED = 'GET_USERS_FAILED',

  GET_USER_REQUEST = 'GET_USER_REQUEST',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILED = 'GET_USER_FAILED',

  POST_USER_REQUEST = 'POST_USER_REQUEST',
  POST_USER_SUCCESS = 'POST_USER_SUCCESS',
  POST_USER_FAILED = 'POST_USER_FAILED',

  PUT_USER_REQUEST = 'PUT_USER_REQUEST',
  PUT_USER_SUCCESS = 'PUT_USER_SUCCESS',
  PUT_USER_FAILED = 'PUT_USER_FAILED',

  DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILED = 'DELETE_USER_FAILED',
}

export interface UserState {
  pending: boolean,
  users: Array<User>,
  error: string | null
}

export interface User {
  id: string,
  name: string,
  email: string
}

////////////////////////////////////////////////////////////////////////////////////////////
////  ACTION TYPES
///////////////////////////////////////////////////////////////////////////////////////////

export type UserError = {
  type: typeof userTypes.GET_USER_FAILED | typeof userTypes.GET_USERS_FAILED | typeof userTypes.POST_USER_FAILED | typeof userTypes.PUT_USER_FAILED | typeof userTypes.DELETE_USER_FAILED,
  payload: { error: string }
}

/** GET USERS TYPES */
export interface GetUsersRequest {
  type: typeof userTypes.GET_USERS_REQUEST
}

export type GetUsersSuccess = {
  type: typeof userTypes.GET_USERS_SUCCESS,
  payload: Array<User>
}

/** GET USER TYPES */
export interface GetUserRequest {
  type: typeof userTypes.GET_USER_REQUEST,
  payload: { userId: string }
}

export type GetUserSuccess = {
  type: typeof userTypes.GET_USER_SUCCESS,
  payload: User
}

/** CREATE USER TYPES */
export interface CreateUserRequest {
  type: typeof userTypes.POST_USER_REQUEST,
  payload: { name: string, email: string}
}

export type CreateUserSuccess = {
  type: typeof userTypes.POST_USER_SUCCESS,
  payload: User
}

/** UPDATE USER TYPES */
export interface UpdateUserRequest {
  type: typeof userTypes.PUT_USER_REQUEST,
  payload: User
}

export type UpdateUserSuccess = {
  type: typeof userTypes.PUT_USER_SUCCESS,
  payload: User
}

/** DELETE USER TYPES */
export interface DeleteUserRequest {
  type: typeof userTypes.DELETE_USER_REQUEST,
  payload: { id: string }
}

export type DeleteUserSuccess = {
    type: typeof userTypes.DELETE_USER_SUCCESS,
    payload: User
}

export type UserActions = (
    GetUsersRequest | GetUsersSuccess |
    GetUserRequest | GetUserSuccess |
    CreateUserRequest | CreateUserSuccess |
    UpdateUserRequest | UpdateUserSuccess |
    DeleteUserRequest | DeleteUserSuccess | UserError)