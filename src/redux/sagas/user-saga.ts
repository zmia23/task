import { put, call, takeLatest } from 'redux-saga/effects'
import { userApi } from '../../services/user'
import { CreateUserRequest, UpdateUserRequest, userTypes } from '../actions/user-action-types'

// Get all users - saga handling call for fetching list of all users
function* workerGetUsers() {
  try {
    const response: object = yield call(userApi.getAllUsers)
    yield put({ type: userTypes.GET_USERS_SUCCESS, payload: response })
  } catch (error: any) {
    yield put({ type: userTypes.GET_USERS_FAILED, payload: error.message })
  }
}

export function* getUsers() {
  yield takeLatest(userTypes.GET_USERS_REQUEST, workerGetUsers)
}

// Create user - saga handling call for creating new user object with specified attributes
function* workerCreateUser(action: CreateUserRequest) {
  try {
    const response: object = yield call(userApi.createUser, action.payload)
    yield put({ type: userTypes.POST_USER_SUCCESS, payload: response })
  } catch (error: any) {
    yield put({ type: userTypes.POST_USER_FAILED, payload: { error: error.message } })
  }
}

export function* createUser() {
  yield takeLatest(userTypes.POST_USER_REQUEST, workerCreateUser)
}

// Update user - saga handling call for updating user object with specific id to be updated
function* workerUpdateUser(action: UpdateUserRequest) {
  try {
    const response: object = yield call(userApi.updateUser, action.payload.id, action.payload)
    yield put({ type: userTypes.PUT_USER_SUCCESS, payload: response })
  } catch (error: any) {
    yield put({ type: userTypes.PUT_USER_FAILED, payload: {error: error.message } })
  }
}

export function* updateUser() {
  yield takeLatest(userTypes.PUT_USER_REQUEST, workerUpdateUser)
}

// Delete user - saga handling call for deleting user object
function* workerDeleteUser(action: UpdateUserRequest) {
  try {
    const response: object = yield call(userApi.deleteUser, action.payload.id)
    yield put({ type: userTypes.DELETE_USER_SUCCESS, payload: response })
  } catch (error: any) {
    yield put({ type: userTypes.DELETE_USER_FAILED, payload: {error: error.message } })
  }
}

export function* deleteUser() {
  yield takeLatest(userTypes.DELETE_USER_REQUEST, workerDeleteUser)
}