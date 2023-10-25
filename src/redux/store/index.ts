import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import RootReducer from './root-reducer' 
import { all } from 'redux-saga/effects';

import { getUsers, createUser, updateUser, deleteUser } from '../sagas/user-saga';

// Add sagas to root saga
function* RootSaga () {
  yield all([getUsers(), createUser(), updateUser(), deleteUser()])
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga)

export default store