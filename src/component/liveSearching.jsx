import React, { useState } from "react";

const LiveSearching = () => {
  const [inputValue, setInputValue] = useState("");
  const data = ["apple", "banana", "grapes", "orange"];
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    setFilteredData(
      data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleSearch = () => {
    console.log("Search Triggered");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default LiveSearching;
