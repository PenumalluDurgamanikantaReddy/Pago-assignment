import React from 'react'
import Card from './components/Card';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import mdjp from "./components/imgs/mbJpg.png"
import mbvector from "./components/imgs/md.png" 

import bdvector from "./components/imgs/BDD.png"
import bdjpg from "./components/imgs/BIjpg.png" 

import dtvector from "./components/imgs/Dt.png"
import dtjpg from "./components/imgs/dtjpg.png" 

import optvector from "./components/imgs/opt.png"
import optjpg from "./components/imgs/OPTJPG.png" 

import proservector from "./components/imgs/profJpg.png"
import profJpg from "./components/imgs/proser.png" 

import productjpg from "./components/imgs/Product.png"
import productvector from "./components/imgs/Productjpg.png"

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import map from "./components/imgs/map.png"

import cvs from "./components/logos/cvs.png"
import absjpg from "./components/logos/abs.png"
import deloitte from "./components/logos/deloitte.png"
import ibm from "./components/logos/ibm.png"
import jcrew from "./components/logos/jcrew.png"
import ms from "./components/logos/ms.png"
import verizon from "./components/logos/verizon.png"
import westbank from "./components/logos/westbank.png"
import nike from "./components/logos/nike.png"
import quest from "./components/logos/Quest.png"
import loreal from "./components/logos/loreal.png"
import grandcayno from "./components/logos/grandcayno.png"
import providence from "./components/logos/providence.png"

const Mapimg = styled('img')({
  width: '80%',
  left:"200px",
  position:"absolute",
});

const Services = [
  { service: "Mobile App Development", id: "mobiled", vectorimg: mbvector, img: mdjp,about:"We offer native Mobilebile development for,Native or cross-platform mobile application development Backend reconciliation or distribution on the App Store, Google Play or Microsoft Store.", },
  { service: "Business Intelligence", id: "busniessid", vectorimg: bdvector, img: bdjpg ,about:"Business intelligence  has different meanings to different  people. People  equate BI  with  dashboards  Data warehouse,  ETL tools, BI is not a concept that is  exclusive  to IT professionals.Multidimensional database or cubes,",},
  { service: "Digital Transformation", id: "Digitalid", vectorimg: dtvector, img: dtjpg ,about:"Here, we put together communication and collaboration tools to efficiently enhance the way organizations operate and interact. Our Digital Transformation process involves mapping out the best digital design flow. "},
  { service: "Open Source Techonlogies", id: "Openid", vectorimg: optvector, img: optjpg,about:"Our Software Architects creates a flow   which  simplifies  usage and  collaboration  of work  with  such  Open-Source  softwares to help developers explore  creative means of  work easily." },
  { service: "Professional Services", id: "Professionalid", vectorimg: profJpg, img: proservector ,about:"We're interested to see your business grow with less hassles, offering Professional level business services  like Banking Services, Insurance Services, Telecom services,Healthcare services.which are essential for every business industries."},
  { service: "Product Development", id: "Productid", vectorimg: productjpg, img: productvector,about:"Creating a New Product is great, but many of such products face commercial failure if the implementation is not well planned.This way,we create a strategic development plan  market success, " }
];

const Clintes=[deloitte,ms,cvs,jcrew,nike,absjpg,grandcayno,loreal,westbank,verizon,quest,ibm,providence]

function Test() {
    const responsive = {
        0: { items: 1 },
        514: { items: 3 },
      }

      const Weare = styled('div')({
   
        width: "50%",
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

    <div style={{display:"flex",flexDirection:"column",marginBottom: "2rem",}} className="parent-container" >

      <Mapimg src={map} />
      <Weare style={{color:"white"}}><strong>What We Offer for You</strong></Weare>
      <div className='carousel' style={{paddingTop:"12rem"}} >
    
      <AliceCarousel mouseTracking infinite autoPlayInterval={500} animationDuration={1200} autoPlay items={Services.length}  responsive={responsive} stagePadding={0} disableButtonsControls  disableDotsControls>
      {Services.map((each) => (
        <div style={{ height: '30rem',width:"1300px"}}><Card key={each.id} id={each.id}  vector={each.vectorimg} service={each.service} img={each.img} about={each.about} /></div>
      ))}
    </AliceCarousel>
      </div>


   
  
    
   <div style={{marginTop:"10rem"}}>
      <h1 style={{color:"#193eca",}}>Our Clients</h1>
    <div className='carousels'  style={{marginTop:"2rem"}} >
     <AliceCarousel mouseTracking infinite autoPlayInterval={500} animationDuration={1200} autoPlay items={Clintes.length}  responsive={responsivee} stagePadding={0} disableButtonsControls  disableDotsControls>
    {Clintes.map((each) => (
      <img src={each} style={{width:"85%",height:"3rem",marginTop:"2rem"}} alt="img"/>
    ))}
  </AliceCarousel>
    </div>
    </div>


</div>
    </Container>
  )
}

export default Test;
