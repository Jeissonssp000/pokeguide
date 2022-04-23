import { useEffect, useState } from "react";
import { getPokeList } from "../utils/api";

export const useSearch = (customList) => {
  const [pokeList, setPokeList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchEmpty, setEmpty] = useState(false);

  useEffect(() => getPokeList(setPokeList), []);
  useEffect(() => setSearch(""), [customList]);

  useEffect(() => {
    setEmpty(false);
    if (search.length > 0) {
      const list = customList.length ? customList : pokeList;
      const text = search
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      const newArray = list.filter((pokemon) => pokemon.name.includes(text));
      newArray.length ? setSearchList(newArray) : setEmpty(true);
    } else {
      setSearchList([]);
    }
  }, [search]);

  const searchHandler = (event) => setSearch(event.target.value);

  return { searchEmpty, search, searchHandler, searchList };
};
