import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {
    let navigate = useNavigate();
    const obj = {
        name: "Sumit",
        subject: "React",
        city: "Rajkot",
    };
    const handleClick = () => {
        navigate("/contact", { replace: true, state: obj });
    }
    return (
        <div>
            <h1>Contact</h1>
            <button onClick={handleClick}>Go to Contact</button>
        </div>
    )
}
