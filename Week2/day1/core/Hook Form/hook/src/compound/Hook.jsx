import React, { useState } from 'react';


const Form = (props) => {
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword] = useState("");

  const formDataDivStyle = {
    textAlign: "left",
    width: "450px",
    margin: "auto",
  }

  const inputDataDivStyle = {
    borderRadius: "15px",
    backgroundColor: "#f2f2f2",
    width: "350px",
    height:"80px",
    border: "1px solid darkgrey",
    padding: "0px 10px",
    margin: "5px",
    fontSize:"1.5rem",
    fontFamily: "cursive",
  }

  return (
    <div>
      <form style={{ textAlign: 'center'}}>
        <div style={inputDataDivStyle}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={ (e) => setFirstName(e.target.value) }
          />
        </div><br />
        <div style={inputDataDivStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={ (e) => setLastName(e.target.value) }
          />
        </div><br />
        <div style={inputDataDivStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div><br />
        <div style={inputDataDivStyle}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div><br />
        <div style={inputDataDivStyle}>
          <label htmlFor="confirmPassord">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={ (e) => setConfirmPassword(e.target.value) }
          />
        </div><br />
      </form>

      <div style={ formDataDivStyle }>
        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
        <p>
          <label>First Name: { firstName } </label>
        </p>
        <p>
          <label>Last Name: { lastName } </label>
        </p>
        <p>
          <label>Email: { email } </label>
        </p>
        <p>
          <label>Password: { password } </label>
        </p>
        <p>
          <label>Confirm Password: { confirmPassword } </label>
        </p>
      </div>
    </div>
  )
}

export default Form;
