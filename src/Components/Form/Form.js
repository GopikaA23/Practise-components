import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Increment Age</button>
      <p>
        Your name is {name} and age is {age}
      </p>
    </div>
  );
};

export default Form;
