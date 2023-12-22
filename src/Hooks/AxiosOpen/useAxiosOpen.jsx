import axios from "axios";

const axiosOpen = axios.create({
    baseURL: 'https://task-management-platform-server-ecru.vercel.app'
}) 

const useAxiosOpen = () => {
   return axiosOpen
};

export default useAxiosOpen;