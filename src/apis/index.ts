import axios from 'axios'

/**
 * Create axios instances
 */
const api = axios.create({
  baseURL: process.env.API_URL,
})

export default api
