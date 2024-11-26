import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './CRUD with Routing/Create';
import Delete from './CRUD with Routing/Delete';
import Update from './CRUD with Routing/Update';
import Read from './CRUD with Routing/Read';
import './App.css'


function App() {
  const [record, setRecord] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Read data={record}/>}></Route>
        <Route path="/create" element={<Create data={record} setData={setRecord} />}></Route>
        <Route path="/delete" element={<Delete data={record} setData={setRecord} />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
