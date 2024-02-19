import React, { useState } from "react";
import _ from "lodash";
import "./DropDown.css";

function DropDown({ options, Checkbox, selectedOption, onOptionSelect }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showValue, setShowValue] = useState("Select");

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const handleValueClick = (option) => {
    setShowValue(option);
    setShowDropDown(!showDropDown);
    onOptionSelect(option);
  };

  return (
    <div className="dropdown">
      <div className="dropdownheader" onClick={handleClick}>
        {showValue}
      </div>
      {showDropDown && (
        <div className="dropdownbody">
          {_.map(options, (option) => (
            <div key={option}>
              {Checkbox ? (
                <Checkbox
                  value={option}
                  isChecked={option === selectedOption}
                  onChange={() => handleValueClick(option)}
                />
              ) : null}
              <span onClick={() => handleValueClick(option)}>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
