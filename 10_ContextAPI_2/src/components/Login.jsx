import React, { useState, useContext } from 'react'
import UserContext from "../Context/UserContext"

const Login = () => {

  const [username, setUsername] = useState("")
 
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username)
  }

  return (

    <div>
      <h2>Login</h2>
      <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username' />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
