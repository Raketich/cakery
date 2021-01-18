import axios from './request.service'

export default class GenericService {
  constructor ({ url, name }) {
    this.url = url
    this.name = name
  }

  async fetchAll () {
    try {
      const { data } = await axios.get(`${this.url}/`)
      return data
    } catch (err) {
      const errorMessage = {
        err,
        error: true,
        message: `${this.name} on fetchOne something is wrong`
      }
      throw errorMessage
    }
  }

  async fetchOne (id) {
    try {
      const { data } = await axios.get(`${this.url}/${id}`)
      return data
    } catch (err) {
      const errorMessage = {
        err,
        error: true,
        message: `${this.name} on fetchOne something is wrong`
      }
      throw errorMessage
    }
  }

  async create (payload) {
    try {
      const { data } = await axios.post(`${this.url}/`, payload)
      return data
    } catch (err) {
      const errorMessage = {
        err,
        error: true,
        message: `${this.name} on fetchOne something is wrong`
      }
      throw errorMessage
    }
  }

  async update (id, payload) {
    try {
      const { data } = await axios.put(`${this.url}/${id}`, payload)
      return data
    } catch (err) {
      const errorMessage = {
        err,
        error: true,
        message: `${this.name} on fetchOne something is wrong`
      }
      throw errorMessage
    }
  }

  async delete (id) {
    try {
      await axios.delete(`${this.url}/${id}`)
    } catch (err) {
      const errorMessage = {
        err,
        error: true,
        message: `${this.name} on fetchOne something is wrong`
      }
      throw errorMessage
    }
  }
}
