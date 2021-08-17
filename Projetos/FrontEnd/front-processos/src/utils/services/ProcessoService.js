import * as Api from './api'

export const findAll = async (assuntoId) => {
  if (!assuntoId) return await Api.get('/processos')

  return await Api.get(`/processos?cd_assunto_id=${assuntoId}`)
}

export const find = async (id) => {
  return await Api.get(`/processos/${id}`)
}

export const create = async (data) => {
  return await Api.post('/processos', data)
}

export const update = async (data, id) => {
  return await Api.put(`/processos/${id}`, data)
}

export const remove = async (id) => {
  return await Api.remove(`/processos/${id}`)
}
