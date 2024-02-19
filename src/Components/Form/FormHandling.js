// 2. **Form Handling**:
//    Create a component called `LoginForm` that includes input fields for username and password.
//     Handle form submission and validation using `useState` hook. Display appropriate error
//     messages if the form is submitted with invalid inputs.

import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isValidation, setIsValidation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidation(true);
  };

  useEffect(() => {
    if (isValidation) {
      if (formData.username.trim() !== "" && formData.password.trim() !== "") {
        alert("Login successful.");
      } else {
        alert("Login failed. Please enter valid username and password.");
      }
    }
  }, [isValidation, formData]);

  return (
    <div>
      <h2>Login Form</h2>
      <form onClick={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
