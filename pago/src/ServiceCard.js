


import React from 'react'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
function ServiceCard({img,services,}) {

  const Weare = styled('div')({
   
    width: "40%",
    height: '60%',
    padding:"40px",
    border:"1px solid white",
    alignItems:"center",
     justifyContent:"center",
     alignContent:"center",
     display:"flex",
     flexDirection:"column",
    "&:hover":{
  
    border:"1px solid black",
    boxshadow: "0 0 10px rgba(0,0,0,0.5)",
    },
   },)


  return (
    <Weare style={{width:"4rem",height:"3.5rem",}}>
    <img src={img}  style={{width:"5rem",height:"5rem"}}/>
    <strong style={{textAlign:"left"}}>{services}</strong>
    </Weare>
  )
}

export default ServiceCard