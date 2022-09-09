import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Homepage from './component/Homepage/Homepage';
import { Route, Routes } from 'react-router-dom';
import FavaoritePage from './component/FavouritePage/FavaoritePage';
import { useState } from 'react';

function App() {
  const [favouriteProperty,setFavaouriteProperty]=useState([])
  const handleFavauritePage=(data)=>{
        console.log(data);
    let newProperty=[...favouriteProperty,data]
       setFavaouriteProperty(newProperty);
      
    }
   
  return (
    <div >
      <Header></Header>
      <Navbar></Navbar>
     
      <Routes>
        <Route path='favouritePage' element={<FavaoritePage favouriteProperty={favouriteProperty} ></FavaoritePage>}></Route>
        <Route path='/' element={<Homepage handleFavauritePage={handleFavauritePage}></Homepage>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
