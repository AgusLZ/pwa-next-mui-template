import React from 'react'
import './css/login.css'
const login = () => {
  return (
    <form action="#" method="POST">
        <div id="login-box">
            <h1>Login</h1> 

            <div id="form">
                <div id="item">
                    <i></i>
                    <input type="text" placeholder="username" name="username"/>
                </div>

                <div id="item">
                    <i></i>
                    <input type="password" placeholder="password" name="password"/>
                </div>

            </div>
            
            <button type="submit">Login</button>
        </div>
     </form>
  )
}


export default login