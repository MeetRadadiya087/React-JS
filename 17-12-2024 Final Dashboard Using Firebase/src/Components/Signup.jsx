import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebase-config';
import { doc, setDoc } from 'firebase/firestore/lite';

export default function Signup() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let user = await createUserWithEmailAndPassword(auth, email, password)

      .then((data) => {
        setDoc(doc(db, "User, data.user.uid"), {
          name, city, age, email
        })
      })
  }

  const handleReset = async () => {
    setName("");
    setCity("");
    setAge("");
    setEmail("");
    setPassword("");

  }

  return (
    <div>


      <h1>Signup</h1>

      
      <button onClick={handleReset}>Reset</button>


      <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" placeholder='Enter your city' onChange={(e) => setCity(e.target.value)} value={city} />
      <input type="number" placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} value={age} />
      <input type="mail" placeholder='Enter your G-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password} />

      <button onClick={handleSubmit}>Sign Up</button>

      <Link to={"/Login"}>Log In</Link>


    </div>
  )
}

