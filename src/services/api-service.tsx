import axios from 'axios'

import { API_URL } from 'app-constants/api-endpoints'

const apiServiceClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiServiceClient.interceptors.response.use(
  (response: any): any => {
    return { status: response.status, data: response.data }
  },
  (error: any): any => {
    return Promise.reject(error.response)
  },
)

async function getPosts(): Promise<any> {
  const { data } = await apiServiceClient.get('/posts')
  return data
}

async function getComments(): Promise<any> {
  const { data } = await apiServiceClient.get('/comments')
  return data
}

export default {
  getPosts,
  getComments,
}
