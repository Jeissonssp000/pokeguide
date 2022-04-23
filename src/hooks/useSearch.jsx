import { useEffect, useState } from "react";

export const useSearch = (list) => {
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchEmpty, setEmpty] = useState(false);

  useEffect(() => setSearch(""), [list]);

  useEffect(() => {
    setEmpty(false);
    if (search.length > 0) {
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
