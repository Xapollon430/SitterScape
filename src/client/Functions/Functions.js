import Axios from "axios";

export const Post = async (route, postData) => {
  let response = await Axios.post(route, postData);
  return response;
};
