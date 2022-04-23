import { useEffect, useState } from "react";

export const useLimitedList = (pokeList) => {
  const [qty, setQty] = useState(20);
  const [limitedList, setList] = useState([]);
  const [max, setMax] = useState(false);
  
  useEffect(() => {
    if (pokeList && pokeList.length) {
      console.log(pokeList.length, ">", qty);
      if (pokeList.length > qty) {
        const newArray = [];
        for (let i = 0; i < qty; i++) {
          newArray.push(pokeList[i]);
        }
        setList(newArray);
        console.log(newArray.length);
      } else {
        setList(pokeList);
        setMax(true);
      }
    }
  }, [pokeList, qty]);

  const addMore = () => {
    setQty((old) => old + 20);
  };

  return { limitedList, max, addMore };
};
