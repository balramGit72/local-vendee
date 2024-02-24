import axios from "axios";
import { API_BASE_URL } from "../helpers/constant";

const getProductListByCatIdApi = async(id,myLat, myLon) => {

        
        let config = {
          method: 'get',
          url: `${API_BASE_URL}/getProductlistByCatId?category_id=1&myLat=22.8225&myLon=75.2522`,
          headers: { 
          },
        };
      return await axios.request(config);
}


const shopSettingApi = async(categoryId, cartId) => {
        
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/shopSetting/details/${categoryId}/${cartId}`,
    headers: { 
    },
  };
return await axios.request(config);
}


const productListApi = async(cartId, userId) => {
        
  let config = {
    method: 'get',
    url: `${API_BASE_URL}/shopSetting/productList/${cartId}/${userId}`,
    headers: { 
    },
  };
return await axios.request(config);
}

const addToCartApi = async(user_id, product_id, qty, variant_id) => {
  let data = new FormData();
  data.append('user_id', user_id);
  data.append('product_id', product_id);
  data.append('qty', qty);
  data.append('variant_id', variant_id);
  
  let config = {
    method: 'post',
    url: `${API_BASE_URL}/addUpdateCart`,
    headers: { 
    },
    data : data
  };
return await axios.request(config);
}


export {
    getProductListByCatIdApi,
    shopSettingApi,
    productListApi,
    addToCartApi,
    // addToFavoriteApi,
}