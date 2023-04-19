import './App.css';
import Navbar from './components/Navbar';
import React from 'react'

import { styled } from '@mui/material/styles';
import Bg from "./components/imgs/bg.png"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import Footer from './components/Footer';
function App() {

  const Bgimg = styled('img')({
   
    width: '100%',
    position:"static",
    bottom:"10%",

    
  });
  const Titletext = styled("p")({
   
    fontSize:"2rem",
    fontWeight:"bold",
    cursor:"pointer",
    background: 'linear-gradient(to bottom, #43cea2,#185a9d)',
    backgroundClip: 'text',
    color: 'transparent',
   
   fontFamily: 'Montserrat',
 
});
  

  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
   <Bgimg src={Bg} alt="bg" style={{zIndex :1,paddingBottom:"8rem"}} />
 


 
<Route path='/aboutus' exact>
<Firstpage/>
</Route>

   <Route path='/' exact>
   <Firstpage/>
   </Route>

   <Route path='/services/:serviceid'>
<Secondpage/>
</Route>


<Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
// <Clients/>