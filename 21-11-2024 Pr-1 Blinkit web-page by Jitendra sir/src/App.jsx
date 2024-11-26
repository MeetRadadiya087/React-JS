import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Toptwenty from './Components/Toptwenty';
import Mainthreeimg from './Components/Mainthreeimg';
import Topmain from './Components/Topmain';
import Dairyitem from './Components/Dairyitem';
import Footer from './Components/Footer';

function App() {
  const [objone, setObjone] = useState([
    { id: 1, url: "/images/A1.jpg", name: 'Amul Gold Full Cream Fresh Milk', price: 33, weight: '500ml' },
    { id: 2, url: "/images/A2.jpg", name: 'Amul Taaza Toned Fresh Milk', price: 27, weight: '500ml' },
    { id: 3, url: "/images/A3.jpg", name: 'Amul Masti Curd', price: 75, weight: '1kg' },
    { id: 4, url: "/images/A4.jpg", name: 'Amul Masti Curd', price: 23, weight: '200g' },
    { id: 5, url: "/images/A5.jpg", name: 'Amul Cheese Cubes', price: 134, weight: '200g' },
    { id: 6, url: "/images/A6.jpg", name: 'Kabhi B Double Roti Whole Wheat Bread', price: 55, weight: '400g' },
    { id: 7, url: "/images/A7.jpg", name: 'Amul Cheese Block', price: 130, weight: '200g' },
    { id: 8, url: "/images/A8.jpg", name: 'Amul Blend Diced Cheese', price: 125, weight: '200g' },
    { id: 9, url: "/images/A9.jpg", name: 'Amul Gold Milk', price: 80, weight: '1l' },
    { id: 10, url: "/images/A10.jpg", name: 'Amul Blend Diced Cheese', price: 65, weight: '100g' },
    { id: 11, url: "/images/A11.jpg", name: 'epigamia Wild Raspberry Flavoured...', price: 60, weight: '85g' },
    { id: 12, url: "/images/A12.jpg", name: 'epigamia Blueberry Flavoured Greek Yogurt', price: 60, weight: '85g' },
    { id: 13, url: "/images/A13.jpg", name: 'Kabhi B Pizza Base', price: 45, weight: '200 g (2 pieces)' },
    { id: 14, url: "/images/A14.jpg", name: 'epigamia Strawberry Flavoured Greek Yogurt', price: 60, weight: '85g' },
    { id: 15, url: "/images/A15.jpg", name: 'Kabhi B Crustless White Bread', price: 50, weight: '300g' },
    { id: 16, url: "/images/A16.jpg", name: 'Brown Rolling Paper Cones - Stash Pro', price: 90, weight: '6 pieces' },
    { id: 17, url: "/images/A17.jpg", name: 'White Rolling Paper Cones - Stash Pro', price: 90, weight: '6 pieces' },
    { id: 18, url: "/images/A18.jpg", name: 'Brown Ripper Rolling Paper 32 Leaves + 32 Roaches Stash Pro', price: 120, weight: '1 pack (64 pieces)' },
    { id: 19, url: "/images/A19.jpg", name: 'High Density Smoking Filters by Stash Pro', price: 149, weight: '1 pack (120 pieces)' },
    { id: 20, url: "/images/A20.jpg", name: 'Gun Metal 3 Layer Crusher with Cleaning Mesh by Stash Pro', price: 750, weight: '1 piece' },
    { id: 21, url: "/images/A21.jpg", name: 'Herb Mixing Rolling Tray by Stash Pro', price: 300, weight: '1 piece' },
    { id: 22, url: "/images/A22.jpg", name: 'Cheetos Cheese Flavoured Puffs', price: 161, weight: '24.8g' },
    { id: 23, url: "/images/A23.jpg", name: 'Orion K Snack Kimchi Onion Rings', price: 50, weight: '70g' },
    { id: 24, url: "/images/A24.jpg", name: 'Kettle Studio Himalayan Pink Salt Potato Chips', price: 47, weight: '47g' },
    { id: 25, url: "/images/A25.jpg", name: 'Orion K Snack Kimchi Onion Rings + K Snack Ring Puffs 3X Spicy Combo', price: 84, weight: '70g+70g' },
    { id: 26, url: "/images/A26.jpg", name: 'Orion Turtle Masala Corn Chips', price: 90, weight: '115g' },
  ]);

  return (
    <>
      <Navbar />
      <Topmain />
      <Mainthreeimg />
      <Toptwenty objone={objone} /> {}
      <Dairyitem objone={objone} /> {}
      <Footer />
    </>
  );
}

export default App;
