import axios from 'axios'
import { useSelector } from 'react-redux'

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_SERVERURL
})

axiosInstance.interceptors.request.use(config=>{
    const token = localStorage.getItem('AdminToken')
    config.headers.Authorization = token ?  `Bearer ${token}` : null
})
 
export default axiosInstance