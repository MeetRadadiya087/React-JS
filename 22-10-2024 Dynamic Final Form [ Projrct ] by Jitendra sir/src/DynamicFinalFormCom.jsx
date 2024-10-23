import React, { useState } from 'react'

export default function DynamicFinalFormCom() {

    const [cat, setCat] = useState("")

    const [name, setName] = useState("");
    const [email, setCompnyName] = useState("");
    const [number, setProductName] = useState("");
    const [password, setPrice] = useState("");

    return (
        <div>

            <h1> Dynamic Form </h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} className='input' />
                <input type="text" placeholder='Enter your Compny Name' onChange={(e) => setCompnyName(e.target.value)} className='input' />
                <input type="text" placeholder='Enter your Product Name' onChange={(e) => setProductName(e.target.value)} className='input' alert='' />
                <input type="number" placeholder='Enter your Price - Ratio' onChange={(e) => setPrice(e.target.value)} className='input' />


                <select onChange={(e) => setCat(e.target.value)} >
                    <option hidden>Category</option>
                    <option value="Shirt">Shirt</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="Huddy">Huddy</option>
                    <option value="Jacket">Jacket</option>
                </select>


                {/* Shirt */}

                {cat == "Shirt" && <input type="number" placeholder="Enter your Size"  className='sub-input'/> }
                {cat == "Shirt" && <input type="text" placeholder="Enter your Color"  className='sub-input'/> }
                {cat == "Shirt" && <input type="text" placeholder="Enter your Brand"  className='sub-input'/> }
                {cat == "Shirt" && <input type="text" placeholder="Enter your Fashion"  className='sub-input'/> }


                {/* T-shirt */}

                {cat == "T-shirt" && <input type="number" placeholder="Enter your Size"  className='sub-input'/> }
                {cat == "T-shirt" && <input type="text" placeholder="Enter your Color"  className='sub-input'/> }
                {cat == "T-shirt" && <input type="text" placeholder="Enter your Brand"  className='sub-input'/> }
                {cat == "T-shirt" && <input type="text" placeholder="Enter your Fashion"  className='sub-input'/> }


                {/* Huddy */}

                {cat == "Huddy" && <input type="number" placeholder="Enter your Size"  className='sub-input'/> }
                {cat == "Huddy" && <input type="text" placeholder="Enter your Color"  className='sub-input'/> }
                {cat == "Huddy" && <input type="text" placeholder="Enter your Brand"  className='sub-input'/> }
                {cat == "Huddy" && <input type="text" placeholder="Enter your Fashion"  className='sub-input'/> }


                {/* Jacket */}

                {cat == "Jacket" && <input type="number" placeholder="Enter your Size"  className='sub-input'/> }
                {cat == "Jacket" && <input type="text" placeholder="Enter your Color"  className='sub-input'/> }
                {cat == "Jacket" && <input type="text" placeholder="Enter your Brand"  className='sub-input'/> }
                {cat == "Jacket" && <input type="text" placeholder="Enter your Fashion"  className='sub-input'/> }

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}





// enter your Name
// enter your Compny Name
// enter your Product Name
// enter your Price