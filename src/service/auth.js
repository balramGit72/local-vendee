  import axios from "axios";
import { API_BASE_URL } from "../helpers/constant";

  const loginApiFun = async (formData) => {
  console.log('formData: ', formData);
      let data = JSON.stringify({
        // "email":"test@gmail.com",
        // "password":"123456"
        ...formData
    });
        
        let config = {
          method: 'post',
          url: `${API_BASE_URL}/login`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
      return await axios.request(config);
  }

  const signupApiFun = async (formData) => {
    let data = JSON.stringify({
        ...formData
      });
      
      let config = {
        method: 'post',
        url: `${API_BASE_URL}/register`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
    return await axios.request(config);
  }

  export { loginApiFun, signupApiFun };
