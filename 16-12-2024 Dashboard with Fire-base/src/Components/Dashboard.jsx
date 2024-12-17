import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase-config';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "Users", user)).then((data) => {
        setUserData(data.data());
        console.log(data.data());
      });
    }
  };

  return (
    <div>
      <h1>Welcome to Dash-board</h1>
      {
        userData && userData.name
      }
      <br />
      {
        userData && userData.age
      }
      <br />
      {
        userData && userData.city
      }
      <br />
      {
        userData && userData.email
      }
    </div>

  )
}
