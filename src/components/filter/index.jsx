import "./Filter.css";
import React, { useState } from "react";
import { InfoContext } from "../../context/InfoContext";

const FilterSection = () => {
  const { typesList } = InfoContext();
  const [checked, setChecked] = useState([]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    console.log(updatedList);
    setChecked(updatedList);
  };

  return (
    <section className="filter_section">
      {typesList.map((type, index) => (
        <div key={index}>
          <input value={type.url} type="checkbox" onChange={handleCheck} />
          <span>{type.name}</span>
        </div>
      ))}
    </section>
  );
};

export default FilterSection;
