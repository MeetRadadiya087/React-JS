import React, { useEffect, useState } from 'react'

export default function Localintro() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender]=useState("")
  const [city, setCity]=useState("")


  const[editIndex, setEditIndex] = useState(null)

  const [record, setRecord] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Students")) || [];
    setRecord(data);
  }, []);


  const handleSubmit = () => {
    if (editIndex == null){
      let obj = { id: Date.now(), name, age,gender,city};
      setRecord([...record, obj]);
      localStorage.setItem("Students", JSON.stringify([...record, obj]));
    } else {
      let singleData = record.find((index) => index.id == editIndex);
      singleData.id = editIndex;
      singleData.name = name;
      singleData.age = age;
      singleData.gender = gender;
      singleData.city = city;
     
      localStorage.setItem("Students", JSON.stringify(record));
    }
    setName("");
    setAge("");
    setGender("");
    setCity("");
    setEditIndex(null);
    
  };





  const handleEdit = (i) => {
    let singleData = record.find((index) => index.id == i);
    setName(singleData.name)
    setAge(singleData.age)
    setGender(singleData.gender)
    setCity(singleData.city)
    setEditIndex(i);
    
  }



  const handleDelete = (i) => {
    let data = record.filter((item) => item.id != i);
    setRecord(data)
    localStorage.setItem("Students", JSON.stringify(data));
  }





  return (
    <div>

      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />     <br />
      <input type="number" placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} />    <br /><br />


      <label >Gender : </label>
      <input type="radio" name='ABC' id='male' value="male" onChange={(e) => setGender(e.target.value)}/> Male      <br />
      <input type="radio" name='ABC' id='female' value="female" onChange={(e) => setGender(e.target.value)}/> Female    <br /><br />

      <label >City : </label>
      <select onChange={(e)=>setCity(e.target.value)} >
        <option value="rajkot">Rajkot</option>
        <option value="surat" >Surat</option>
        <option value="ahemdabad">Ahemdabad</option>
        <option value="vadodara" >Vadodara</option>
      </select> 

      <button onClick={handleSubmit}>{editIndex == null ? "Submit" : "Update"}</button>


      <table>

        <thead>

          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th colSpan={2}></th>
          </tr>

        </thead>

        <tbody>

          {record && record.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => handleEdit(e.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(e.id)}>Delete</button>
                </td>
              </tr>
            )
          })}

        </tbody>

      </table>











    </div>
  )
}










