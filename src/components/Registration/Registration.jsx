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
      <form className= 'form' onSubmit={handleSubmit}> 
      
      <div className='form_row'>
          <input className='input'
          placeholder='Email'
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className='form_row'>
          <input className='input'
          placeholder='User Name'
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
       
        <div className='form_row'>
          <input className='input'
            placeholder='Password'
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className='form_row'>
          <input className='input'
          placeholder='Confirm Password'
            type="password"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <button className= "registration_button" type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default Registration;