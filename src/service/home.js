import axios from "axios";
import { API_BASE_URL } from "../helpers/constant";



const sidlerListApi = async () =>{
    let config = {
        method: 'get',
        url: `${API_BASE_URL}/slider/1`,
        headers: { }
      };
      return await axios.request(config);
}

const debouncedSearchApi= async (value, myLat, myLon, zone_id)=>{
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/shopSearch?myLat=22.5543&myLon=75.656&search=${value}&zone_id=191`,
    headers: { }
  };
  return await axios.request(config);
}


const getAllCategoryApiById= async (id)=>{
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/getAllCategory/${id}`,
    headers: { }
  };
  return await axios.request(config);
}

const getAllClasifiedCategoryApi= async (id)=>{
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/getAllClasifiedCategory`,
    headers: { }
  };
  return await axios.request(config);
}
export {
  sidlerListApi,
  debouncedSearchApi,
  getAllCategoryApiById,
  getAllClasifiedCategoryApi
}