import React from 'react'
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Main from './components/Main';

import Test from './Test';
import { styled } from '@mui/material/styles';
import Bg from "./components/imgs/bg.png"
import Clients from "./components/Clients"
import Contact from './components/Contact';
import Footer from './components/Footer';
function Firstpage() {
  return (
    <div>
    <main style={{marginBottom:"15rem",marginTop:"3rem"}}>
   <Main />
   </main>
   <Test/>
<Contact/>

    </div>
  )
}

export default Firstpage