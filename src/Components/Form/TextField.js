import React, { useState } from "react";

const TextField = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        placeholder="Enter something"
        onChange={handleChange}
      />
      <p>input : {text}</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};

export default TextField;
