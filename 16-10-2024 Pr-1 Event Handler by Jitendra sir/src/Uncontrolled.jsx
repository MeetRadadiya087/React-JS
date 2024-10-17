import React, { useRef } from 'react'

export default function Uncontrolled() {
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();
    const phoneRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, cityRef.current.value, subRef.current.value, phoneRef.current.value);
        
    }

    return (
        <div class="main">
            <fieldset>
                <legend>Information</legend>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder='Enter Your name' ref={nameRef} />
                    <input type="text" placeholder='Enter your city' ref={cityRef} />      <br /><br />
                    <input type="text" placeholder='Enter your subject' ref={subRef} />
                    <input type="number" placeholder='Enter your phone' ref={phoneRef} />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    )
}
