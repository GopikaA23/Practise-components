import React, { useState } from "react";

const CheckBox = () => {
  const [liked, setLiked] = useState(false);

  const handleChange = (e) => {
    setLiked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />
        Are you ok?
      </label>
      <p>{liked ? "Yes" : "No"}</p>
    </div>
  );
};

export default CheckBox;
