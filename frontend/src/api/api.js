import axios from 'axios'

const API_BASE_URL = "http://localhost:8000/api"

export const fetchProducts = () => {
  return axios.get(`${API_BASE_URL}/products`)
}

export const fetchProductStockAndPrice = (sku) => {
  return axios.get(`${API_BASE_URL}/stock-price/${sku}`)
}