import { useEffect, useState } from "react";
import { getList } from "../utils/api";

export const useList = (url) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList(url, setList);
  }, []);

  return list;
};
