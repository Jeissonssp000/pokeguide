import axios from "axios";

// axios configuration
const baseURL = "https://pokeapi.co/api/v2/";
axios.defaults.baseURL = baseURL;

const getCode = (url) => {
  let array = url.split("/");
  const pos = array.length - 2;
  return array[pos];
};

export const getList = (url, setState) => {
  axios.get(url).then((response) => {
    const data = response.data.results;
    setState(data);
  });
};
