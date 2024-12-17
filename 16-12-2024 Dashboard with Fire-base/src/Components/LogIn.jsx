import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    let user = await signInWithEmailAndPassword(auth, email, password)

    .then((data => {
      navigate("/dashboard", {replace : true})
    }))
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="mail" placeholder='Enter your E-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password}/>
      <button onClick={handleLogin}>Log In</button>

      <span>
        <Link to={'/'}>Sign Up?</Link>
      </span>

    </div>
  )
}

