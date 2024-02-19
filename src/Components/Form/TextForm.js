import React, { useState } from "react";
import _ from "lodash";

const TextForm = () => {
  const [input, setInput] = useState("");
  const [values, setValues] = useState([]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setValues([...values, { id: values.length + 1, text: input }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedValues = _.filter(values, (value) => value.id !== id);
    setValues(updatedValues);
  };

  const handleEdit = (id) => {
    const updatedValues = _.map(values, (value) =>
      value.id === id ? { ...value, isEditing: true } : value
    );
    setValues(updatedValues);
  };

  const handleSaveEdit = (id, newText) => {
    const updatedValues = values.map((value) =>
      value.id === id ? { ...value, text: newText, isEditing: false } : value
    );
    setValues(updatedValues);
    setInput("");
  };

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {values.map((value) => (
        <div key={value.id}>
          {value.isEditing ? (
            <>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(value.id, input)}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>{value.text}</span>
              <button onClick={() => handleEdit(value.id)}>Edit</button>
            </>
          )}
          <button onClick={() => handleDelete(value.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TextForm;
