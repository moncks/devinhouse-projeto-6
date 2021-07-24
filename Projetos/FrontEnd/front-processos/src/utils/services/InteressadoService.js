import * as Api from './api'

export const findAll = async () => {
  return await Api.get('interessados')
}
