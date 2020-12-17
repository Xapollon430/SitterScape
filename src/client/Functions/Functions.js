import Axios from "axios";
import { useLocation } from "react-router-dom";

export const Post = async (route, postData) => {
  let response = await Axios.post(route, postData);
  return response;
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
