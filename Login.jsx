import React from 'react'
import "../style.scss"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Prashant malge</span>
            <span className='title'>Login</span>
            <form>
                <input type="text" placeholder='Display name'/>
                <input type="email" placeholder='Enter email id'/>
               
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;