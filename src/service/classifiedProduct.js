import axios from "axios";
import { API_BASE_URL } from "../helpers/constant";

const classifiedSubCategoryApiById= async (id)=>{
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/classifiedSubCategory/${id}`,
    headers: { }
  };
  return await axios.request(config);
}
export {
  classifiedSubCategoryApiById
}