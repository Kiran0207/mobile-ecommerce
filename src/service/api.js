import axios from 'axios';
const URL='http://localhost:8017';
export const authenticateSignup=async(data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)
    }catch(error)
    {
        console.log("Error while calling sighup API",error.message);
    }
}