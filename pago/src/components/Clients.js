import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';




import cvs from "./logos/cvs.png"
import absjpg from "./logos/abs.png"
import deloitte from "./logos/deloitte.png"
import ibm from "./logos/ibm.png"
import jcrew from "./logos/jcrew.png"
import ms from "./logos/ms.png"
import verizon from "./logos/verizon.png"
import westbank from "./logos/westbank.png"
import nike from "./logos/nike.png"
import quest from "./logos/Quest.png"
import loreal from "./logos/Quest.png"
import grandcayno from "./logos/grandcayno.png"
import providence from "./logos/providence.png"

const Mapimg = styled('img')({
  width: '80%',
  left:"100px",
  position:"absolute",
});



const Clintes=[deloitte,ms,cvs,jcrew,nike,absjpg,grandcayno,loreal,westbank,verizon,quest,ibm,providence]

function Clients() {
    const responsive = {
        0: { items: 1 },
        514: { items: 3 },
      }

      const Weare = styled('div')({
   
        width: "30%",
        height: '70%',
   
        fontFamily:"Montserrat",
        paddingRight:"4rem",
        top:"100px",
        position:"relative",
        zIndex:2,
      fontWeight:"800",
      fontSize:"2rem"
      })

      const responsivee = {
        0: { items: 1 },
        514: { items: 7 },
      }
      const Line = styled('div')({
   
        width: "100%",
        height: '10%',
       color:"#2f76f2"
    
      })






  return (
    <Container >
   

      <div className='carousels'  style={{}} >
      <h1 style={{color:"#193eca",}}>Our Clients</h1>
      <hr></hr>
      <br></br>
      <AliceCarousel mouseTracking infinite autoPlayInterval={500} animationDuration={1200} autoPlay items={Clintes.length}  responsive={responsivee} stagePadding={0} disableButtonsControls  disableDotsControls>
      {Clintes.map((each) => (
        <img src={each} style={{width:"85%",height:"60%"}} alt="img"/>
      ))}
    </AliceCarousel>
      </div>
   
    </Container>
  )
}

export default Clients;
