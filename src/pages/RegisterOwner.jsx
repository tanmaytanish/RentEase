import InputBox from '../components/InputBox'
import React from 'react'
import "../styles/RegisterOwner.css"
import PasswordBox from '../components/PasswordBox'
// import Button from '../components/MyButton'

function RegisterOwner() {
  return (
    <>
    <h2>Register As Owner</h2>

    <div className="container-register-owner">
        <InputBox label="Name" placeholder="Enter your name" /><br /><br />
        <InputBox label="Email" placeholder="Enter your email" /><br /><br />
        <InputBox label="Phone" placeholder="Enter your phone number" type="number"/><br /><br />
        <InputBox label="Address" placeholder="Enter your address" /><br /><br />

      <PasswordBox/>
      {/* <MyButton/> */}

        

    </div>
    </>
  )
}

export default RegisterOwner