import React, { useState } from "react";

function DropdownWithInput({ items }) {
  const [options, setOptions] = useState(items);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddOption = () => {
    if (inputValue.trim() !== "") {
      setOptions([...options, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <select>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter option..."
        />
        <button onClick={handleAddOption}>Add Option</button>
      </div>
    </div>
  );
}

export default DropdownWithInput;
