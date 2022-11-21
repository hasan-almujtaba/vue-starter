import axios from 'axios'

/**
 * Create axios instances
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default api
