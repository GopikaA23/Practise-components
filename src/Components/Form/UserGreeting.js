// 1. **Conditional Rendering**:
//    Implement a component called `UserGreeting` that displays a greeting message
//     based on whether the user is logged in or not. Utilize conditional rendering techniques
//     such as ternary operators or logical && operators.

import React, { useState } from "react";

const UserGreeting = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
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
        <span> {isLogin === true ? "Login Sucessfull" : "Login Failed"}</span>
    </div>
  );
};

export default UserGreeting;
