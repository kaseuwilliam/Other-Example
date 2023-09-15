import axios from "axios"

const BASE_URL = "https://social-media-for-pets.onrender.com"
const apiConnection = axios.create({baseURL:BASE_URL})

export default apiConnection;