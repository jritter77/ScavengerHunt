import axios from "axios";
import { setData, getData } from "../Methods";


export async function loginUser(username, password) {
    try {
      const result = await axios.post('http://localhost:3000/users/login', {username, password});
  
      console.log(result.data)
      
      if (result.data) {
        await setData('user', result.data);
        return true;
      }
  
      return false;
      
    } catch (e) {
      console.log(e);
      return false;
    }
  }