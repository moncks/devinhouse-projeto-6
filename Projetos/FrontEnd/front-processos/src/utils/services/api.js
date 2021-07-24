import axios from 'axios'
import keycloak from '../../keycloak'

const createAxiosInstance = () => {
  return axios.create({
    baseURL: 'http://localhost:8282/v1/', //process.env.REACT_APP,
    headers: {
      Authorization: keycloak?.authenticated ? `Bearer ${keycloak?.token}` : undefined,
    },
  })
}

export const get = async (url) => {
  try {
    return await createAxiosInstance().get(url)
  } catch (error) {
    return error.response
  }
}

export const post = async (url, data = {}, headers = {}) => {
  try {
    return await createAxiosInstance().post(url, data, headers)
  } catch (error) {
    return error.response
  }
}

export const put = async (url, data = {}, headers = {}) => {
  try {
    return await createAxiosInstance().put(url, data, headers)
  } catch (error) {
    return error.response
  }
}

export const remove = async (url) => {
  try {
    return await createAxiosInstance().delete(url)
  } catch (error) {
    return error.response
  }
}
