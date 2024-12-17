import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';


export default function SignUp() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                setDoc(doc(db, "Users", data.user.uid),{
                    name, city, age, email
                });
                navigate("/dashboard")
            }
        );
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <input type="text" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="text" placeholder='Enter your City' onChange={(e) => setCity(e.target.value)}  value={city}/>
            <input type="number" placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} value={age}/>
            <input type="mail" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password}/>

            <button onClick={handleSignup}>Sign Up</button>

            <Link to={"/Login"} >Log In</Link>
        </div>
    )
}
