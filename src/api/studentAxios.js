import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_SERVERURL
})

axiosInstance.interceptors.request.use(config=>{
    const token = localStorage.getItem('StudentToken')
    config.headers.Authorization = token ?  `Bearer ${token}` : null
})
 
export default axiosInstance