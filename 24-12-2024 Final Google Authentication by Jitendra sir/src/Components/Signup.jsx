import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { provider } from '../../firebase-config';


export default function Signup() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navi = useNavigate();

  const handleSubmit = async () => {
   await createUserWithEmailAndPassword(auth, email, password)

      .then((data) => {
        setDoc(doc(db, "User", data.user.uid), {
          name,
          city,
          age,
          email,
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

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider).then((data) => {
      setDoc(doc(db, "User", data.user.uid), { name : data.user.displayName, city : "Rajkot", email : data.user.email, url : data.user.photoURL })
      console.log(data);
      navi("/Dashboard");
    });
  };








  return (
    <div>


      <h1>Signup</h1>




      <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" placeholder='Enter your city' onChange={(e) => setCity(e.target.value)} value={city} />
      <input type="number" placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} value={age} />
      <input type="mail" placeholder='Enter your G-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
      <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password} />
      <br />
      <button onClick={handleSubmit}>Sign Up</button>

      <button onClick={handleGoogleSignIn}> SIgn in whith Google </button>

      <Link to={"/Login"}>Log In</Link>

      <button onClick={handleReset}>Reset</button>

    </div>
  )
}


