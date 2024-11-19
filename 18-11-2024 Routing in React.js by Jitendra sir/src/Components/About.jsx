import React from 'react'
import { useNavigate          } from 'react-router-dom'


export default function About() {
    let navigate = useNavigate();
    const handleClick = () =>{
        navigate("/", {replace : true});
    };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home page</button>
    </div>
  )
}
