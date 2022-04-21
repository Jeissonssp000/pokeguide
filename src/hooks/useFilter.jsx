import { useEffect, useState } from "react";
import { findInfoByUrl } from "../utils/api";

export const useFilter = () => {
  const [checked, setChecked] = useState([]);
  const [bigArray, setBigArray] = useState([]);
  const [filteredList, setFilterList] = useState([]);
  const [filterIsEmpty, setFilterEmpty] = useState(false);

  useEffect(() => {
    setBigArray([]);
    if (checked.length) {
      checked.forEach((url) => findInfoByUrl(url, setBigArray));
    } else {
      setFilterList([]);
    }
  }, [checked]);

  useEffect(() => {
    setFilterEmpty(false);
    if (bigArray.length) {
      bigArray.forEach((list, index) => {
        setFilterList((oldList) => {
          const copy = [...oldList];
          const comparedArray = [];
          if (index === 0) {
            return list;
          } else {
            copy.forEach((pokemon) => {
              if (list.filter((e) => e.name === pokemon.name).length > 0) {
                comparedArray.push(pokemon);
              }
            });
          }
          !comparedArray.length && setFilterEmpty(true);
          return comparedArray;
        });
      });
    } else {
    }
  }, [bigArray]);

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return { filterIsEmpty, checked, filteredList, handleCheck };
};
