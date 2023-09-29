import React, { useState } from 'react';
import "./Registration.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  
    if (name === 'email' && !user.username && value.includes('@')) {
      const usernameFromEmail = value.split('@')[0];
      setUser(prevUser => ({
        ...prevUser,
        username: usernameFromEmail,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user); // Vypíše do konzole
  
    // Resetování hodnot v polích po submit
    setUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  return (
    <div className='container_form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;