import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './Dashboard.css';

export default function Dashboard() {

  const [user, setUser] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchDetail();
  }, [user]);

  const fetchDetail = async () => {
    if (user) {
      console.log(user);
      await getDoc(doc(db, "User", user))
        .then(data => {
          console.log(data.data());
          setUserData(data.data());
        });
    }
  };

  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </div>

      <div className="profile-section">
        <img
          className="profile-image"
          src={userData && userData.url}
          alt="User Profile"
        />
        <h2>{userData && userData.name}</h2>
        <p>{userData && userData.city}</p>
        <p>{userData && userData.email}</p>

        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      <div className="dashboard-footer">
        <p>Powered by Firebase & React</p>
      </div>
    </div>
  );
}




{/* <h1>Welcome to Dashboard</h1>
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
      </table> */}


