import axios from 'axios';


const baseURL = import.meta.env.VITE_API_URL;
console.log(baseURL);

const axiosInstance = axios.create({
  baseURL: baseURL, 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed
  },
});



export default axiosInstance;
