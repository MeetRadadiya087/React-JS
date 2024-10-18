import React, { useState } from 'react'

export default function ControlledCom() {

    const [name, setName] = useState("");
    const [enrollment, setEnrollment] = useState("");
    const [sub, setSub] = useState("");
    const [city, setCity] = useState("");

    const [data, setData] = useState([])

    const handleSubmit = (e) => {
      e.preventDefault();
      let obj = { name, enrollment, sub, city }
      setData([...data, obj])
      setName("");
      setEnrollment("");
      setSub("");
      setCity("");
    }

  return (
    <div className='main-div'>

      <fieldset>
      <legend>Information</legend>
          <form onSubmit={(e) => handleSubmit(e)} className='main-form'>
              <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value) }/>
              <input type="number" placeholder='Enter your Enrollment' value={enrollment} onChange={(e) => setEnrollment(e.target.value) }/>
              <input type="text" placeholder='Enter your Subject' value={sub} onChange={(e) => setSub(e.target.value) }/>
              <input type="text" placeholder='Enter your City' value={city} onChange={(e) => setCity(e.target.value) }/>
              <button type='submit'>Submit</button>
          </form>

          <table className='main-table'>
            <thead className='table-head'>
              <tr>
                <th>Name</th>
                <th>Enrollment</th>
                <th>Subject</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody className='table-bottom'>
              {
                data &&
                data.map((e, i) => {
                  return <tr key={i} >
                    <td>{e.name}</td>
                    <td>{e.enrollment}</td>
                    <td>{e.sub}</td>
                    <td>{e.city}</td>
                  </tr>
                })
              }
            </tbody>
          </table>

      </fieldset>
      
    </div>
  )
}
