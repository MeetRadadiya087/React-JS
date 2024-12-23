import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navi = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (dbUser) => {
      if (dbUser) {
        setUser(dbUser.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchData();
    }
  }, [user]);

  const fetchUserData = async () => {
    const docSnap = await getDoc(doc(db, "User", user));
    if (docSnap.exists()) {
      setUserData(docSnap.data());
    }
  };

  const fetchData = async () => {
    const data = await getDocs(collection(db, "data"));
    const fetchedData = data.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    setRecord(fetchedData);
  };

  const handleAddData = async () => {
    if (editIndex === null) {
      const docRef = await addDoc(collection(db, "data"), { name, sub });
      setRecord([...record, { name, sub, docId: docRef.id }]);
    } else {
      await updateDoc(doc(db, "data", editIndex), { name, sub });
      fetchData(); // refresh the data after update
    }
    setName("");
    setSub("");
    setEditIndex(null);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "data", id));
    const updatedRecord = record.filter((item) => item.docId !== id);
    setRecord(updatedRecord);
  };

  const handleEdit = (id) => {
    const dataToEdit = record.find((item) => item.docId === id);
    setName(dataToEdit.name);
    setSub(dataToEdit.sub);
    setEditIndex(id);
  };

  const handleReset = () => {
    setName("");
    setSub("");
    setEditIndex(null);
  };

  const logout = () => {
    auth.signOut();
    navi("/");
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <button onClick={handleReset}>Reset</button>

      <input 
        type="text" 
        placeholder="Enter your Name" 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
      />
      <input 
        type="text" 
        placeholder="Enter your Subject" 
        onChange={(e) => setSub(e.target.value)} 
        value={sub} 
      />

      <button onClick={handleAddData}>
        {editIndex === null ? "Add Data" : "Update"}
      </button>

      <button onClick={logout}>Log Out</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>U'id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.sub}</td>
              <td>{e.docId}</td>
              <td>
                <button onClick={() => handleEdit(e.docId)}>Edit</button>
                <button onClick={() => handleDelete(e.docId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



// import { addDoc, collection, doc } from 'firebase/firestore/lite';
// import React, { useState } from 'react'
// import { db } from '../../firebase-config';

// export default function Dashboard() {

//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [age, setAge] = useState("");
//   const [mail, setMail] = useState("");
//   const [password, setPassword] = useState("");

//   const [record, setRecord] = useState("");

//   const [editIndex, setEditIndex] = useState(null);

//   const [user, setUser] = useState("");


// const [user, setUser] = useState("");
// const [userData, setUserData] =useState("");


// useEffect(() => {
//   onAuthStateChanged(auth, (data) => {
//     if (data) {
//       setUser(data.uid);
//     }
//   });
// }, []);

// useEffect(() => {
//   fetchUser();
// }, [user]);

// const fetchUser = async () => {
//   if(user){
//     await getDoc(doc(db, "User", user)).then((data) => {
//       setUserData(data.data());
//       console.log();
//     });
//   }
// };

// const handleAddData = async () => {
//   if (editIndex == null) {
//     await addDoc(collection(db, "data"), { name, city, age, mail, password, userId: user })
//       .then(
//         (data) => {
//           setRecord([...record, {name, city, age, mail, password, userId: user }]);
//         }
//       );
//   } else {
//     await updateDoc(doc(db, "data", editIndex), {
//       mail,
//       password,
//       userId: user,
//     });
//     fetchData();
//   }
//   setName("");
//   setCity("");
//   setAge("");
//   setMail("");
//   setPassword("");
//   setEditIndex(null);
// };

// const handleDelete = async (id) => {
//   await deleteDoc(doc(db, "data", id))

//     .then((data) => {
//       let remainingRecord = record.filter((item) => item.docId !== id);
//       setRecord(remainingRecord);
//     });

// };

// const handleEdit = async (id) => {
//   let singleData = record.find(item.docId == id);
//   setName(singleData.name);
//   setCity(singleData.city);
//   setAge(singleData.age);
//   setMail

// }

// const handleReset = async () => {
//   setMail("");
//   setPassword("");

// }


//   const handleLogout = () => {
//     auth.signOut();
//   }

// return (
//   <div>
//     <h1>Welcome to Dash-Board</h1>

//     <button onClick={handleReset}>Reset</button>


//     <input type="mail" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} value={name} />
//     <input type="mail" placeholder='Enter your City' onChange={(e) => setCity(e.target.value)} value={city} />
//     <input type="mail" placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} value={age} />
//     <input type="mail" placeholder='Enter your E-mail' onChange={(e) => setMail(e.target.value)} value={mail} />
//     <input type="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} value={password} />

//     <button onClick={handleAddData}>{editIndex == null ? "Add Data" : "Update"}</button>



//         <button onClick={handleLogout}>Log Out</button>



//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>City</th>
//             <th>Age</th>
//             <th>E-mail</th>
//             <th>Password</th>
//             <th>U'id</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             record && record.map((e, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{e.name}</td>
//                   <td>{e.city}</td>
//                   <td>{e.age}</td>
//                   <td>{e.mail}</td>
//                   <td>{e.password}</td>
//                   <td>{e.userId}</td>

//                   <td>
//                     <button onClick={() => handleEdit(e.id)}>Edit</button>
//                   </td>
//                   <td>
//                     <button onClick={() => handleDelete(e.id)}>Delete</button>
//                   </td>

//                 </tr>
//               )
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }  
