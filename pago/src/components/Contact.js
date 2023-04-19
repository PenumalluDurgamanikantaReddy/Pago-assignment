import React from 'react'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import "./caro.css"
function Contact() {
    
  const Form = styled("div")({
    display: 'flex',
    justifyContent: 'justify',
   
  

  });
  return (
    <Container>
    <h1 style={{marginRight:"8%",top:"5rem",position:"relative",color:"white"}}>Contact Us</h1>
     <Form  className='bgclass' style={{display:"flex",flexDirection:"column",}}>
    
     <div style={{display:"grid", gridTemplateRows: 'repeat(2, 1fr)', gap: '40px', gridTemplateColumns: 'repeat(2, 1fr)'}}>
    <input style={{width:"80%",height:"2rem",opacity:"50%",color:"transparent",borderRadius:"5px",border:"0px"}} placeholder='Enter your First Name' />
    <input style={{width:"80%",height:"2rem",opacity:"50%",color:"transparent",borderRadius:"5px",}} placeholder='Enter your Last Name'/>
    <input style={{width:"80%",height:"2rem",opacity:"50%",color:"transparent",borderRadius:"5px",}} placeholder='Enter your Gmail'/>
    <input style={{width:"80%",height:"2rem",opacity:"50%",color:"transparent",borderRadius:"5px",}} placeholder='Enter your Phone Number'/>
    </div>
    <button style={{width:"8rem",height:"2.5rem",borderRadius:"10px",backgroundColor:"#2f76f2",border:"0px",color:"white",
  fontSize:"1rem",fontWeight:"600",marginLeft:"39%",marginTop:"4rem"}}>SUBMIT</button>
    </Form>
    </Container>
  )
}

export default Contact