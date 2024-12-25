import { signInWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react'
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    let user = await signInWithEmailAndPassword(auth, email, password)

      .then((data => {
        navigate("/dashboard", { replace: true })
      }))
  }

  const handleReset = async () => {
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleReset}>Reset</button>


      <input type="mail" placeholder='Enter your E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password} />

      <button onClick={handleLogin}>Log In</button>

      <Link to={'/'}>Sign Up?</Link>
    </div>
  )
}
