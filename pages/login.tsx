import React from 'react'
const login = () => {
  return (
    <form action="#" method="POST">
        <div id="login-box" >
            <h1 >Iniciar sesion</h1> 

            <div id="form">
                <div id="item">
                    <i></i>
                    <input type="text" placeholder="Nombre de usuario" name="username"/>
                </div>

                <div id="item">
                    <i></i>
                    <input type="password" placeholder="Contraseña" name="password"/>
                </div>

            </div>
            
            <button type="submit">Iniciar</button>
        </div>
     </form>
  )
}


export default login