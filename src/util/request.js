import axios from "axios";

const request = axios.create({
    baseURL:  "http://localhost:8080/"
});

export const get = async (path, option)=>{
    try {
        const response = await request.get(path);
        return response.data;
    } catch (error) {
        console.error(error);
    }
   
};

export const post = async (path, data)=>{
    const response = await request.post(path, data);
    return response.data;
}

export default request;