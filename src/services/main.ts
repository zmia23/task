import axios, { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { AxiosRequestConfig } from 'axios';
import { randomInt } from './utils';

import { data as defaultData } from './__mock__/data'
import { User } from '../redux/actions/user-action-types';

const axiosMockInstance: AxiosInstance = axios.create();
const axiosLiveInstance: AxiosInstance = axios.create();

const isAxiosMock = import.meta.env.VITE_IS_AXIOS_MOCK
const isErrorOnCreate = import.meta.env.VITE_RETURN_ERROR_ON_CREATE

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance, { delayResponse: 500 });
export const axiosInstance = isAxiosMock ? axiosMockInstance : axiosLiveInstance;

const headers = { 'Content-Type': 'application/json'}

let MockData = defaultData

axiosMockAdapterInstance.onAny(/\/api\/users\/\d+/).reply((config: AxiosRequestConfig) => {
  if(config.method === 'delete') {
    const data = JSON.parse(config.data)
    
    const filteredUsers = MockData.filter((user: User) => data.id !== user.id)
    MockData = filteredUsers
    return [200, data]
  }

  if(config.method === 'put') {
    const data = JSON.parse(config.data)
    const users = MockData
  
    const user = users.find((user: User) => data.id === user.id)

    if(!user) {
      return [404, { message: 'User not found.'}]
    } else {
      user.name = data.name,
      user.email = data.email
    }

    return [200, user]
  }

  return [400, { message: 'Bad request.' }]
})

axiosMockAdapterInstance.onAny(/\/api\/users/).reply((config: AxiosRequestConfig) => {
  if (config.method === 'post') {
    const data = JSON.parse(config.data)

    const user: User = {
      id: randomInt(100, 999).toString(),
      email: data.email,
      name: data.name
    };

    MockData.push(user)
  
    if(isErrorOnCreate === 'true') {
      return [400, { message: 'Bad request' }]
    }

    return [200, user] 
  }

  if (config.method === 'get') {
    const users = MockData
    return [200, users]
  }

  return [404, 'Not found']
})

export const apiRequest = (url: string, method: string, params?: object, data?: any) => axiosInstance.request({ url, method, params, data, headers })
