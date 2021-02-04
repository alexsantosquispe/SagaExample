import axios from 'axios';
import { parseUrl } from '../helper';

export const get = async (url, id = null) => {
  let response = {
    success: false,
    data: null,
    error: null
  };
  const baseUrl = parseUrl(url, id);

  try {
    const result = await axios.get(baseUrl);
    if (result && result.status === 200) {
      response.success = true;
      response.data = result.data;
    }
  } catch (error) {
    response.error = error.message;
  }
  return response;
};
