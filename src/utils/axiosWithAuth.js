import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://replate-2.herokuapp.com/api/",
    headers: {
      authorization: localStorage.getItem("token")
    }
  });
};