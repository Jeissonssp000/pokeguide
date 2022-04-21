import { useEffect, useState } from "react";
import { getPokeList } from "../utils/api";

export const useSearch = (customList) => {
  const [pokeList, setPokeList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false);

  useEffect(() => getPokeList(setPokeList), []);

  useEffect(() => {
    setEmpty(false);
    if (search.length > 0) {
      const list = customList ? customList : pokeList;
      const newArray = list.filter((pokemon) => pokemon.name.includes(search));
      newArray.length ? setSearchList(newArray) : setEmpty(true);
    } else {
      setSearchList([]);
    }
  }, [search]);

  const searchHandler = (event) => setSearch(event.target.value);

  return { empty, search, searchHandler, searchList };
};
