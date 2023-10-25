import { apiRequest } from './main'
import { SlashIf } from './utils'

const UserEndpoint = (userId?: string) => `/api/users${SlashIf(userId)}`

const getAllUsers = () => {
  return apiRequest(UserEndpoint(), 'GET').then(res => res.data)
}

const createUser = (data: object) => {
  return apiRequest(UserEndpoint(), 'POST', undefined , data ).then(res => res.data)
}

const updateUser = async (userId: string, data: object) => {
  return apiRequest(UserEndpoint(userId), 'PUT', undefined, data).then( res => res.data)
}

const deleteUser = async (userId: string) => {
  return apiRequest(UserEndpoint(userId), 'DELETE', undefined, { id: userId }).then(res => res.data)
}

export const userApi = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
}