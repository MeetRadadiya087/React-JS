import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Slider from './Slider';
import { Accordion, Card, Navbar } from 'reactstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Slider />
      <Accordion />
      <Card />
      <Footer />



    </>
  )
}

export default App
