import React from 'react'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import We from "./imgs/wee.jpg"
import "./main.css"
function Main() {

    const Bgimg = styled('img')({
   
        width: '33%',
        height: '45%',
        "&:hover": {
          borderRadius:"6px",
          boxShadow:
            "0 0 10px rgba(0,0,0,0.8), inset 0 0 5px rgba(255,255,255,0.5), inset 0 0 5px rgba(255,255,255,0.3)",
          transition: "box-shadow 0.3s ease-in-out",
        },

      });

      const Weare = styled('div')({
   
        width: "30%",
        height: '70%',

       
      });
   
    const Circle = styled('div')({
        width: '40vw',
        height: '40vw',
        maxHeight: '40vh',
        maxWidth: '40vh',
        borderRadius: '50%',
        
      });
      
      const TextBox = styled("div")(({ theme }) => ({
       
      }));
      

 

return (
   <Container>

   <div style={{display:"flex",alignItems:"center",width:"120%"}}>
  

   <TextBox></TextBox>
   <Weare style={{textAlign: "justify",fontFamily:"Montserrat",paddingRight:"2rem"}}>
   <strong style={{color:"#193eca"}}>OUR COMPANY</strong>
  
    <br></br>
    <br></br>
   With the past few decades filled with the eruption of business
   in various industrial sectors, competition has
    highly become intense therefore giving rise to the need 
    for quick and efficient Business Growth and Development tools
    and strategies. Business Intelligence has highly been adopted 
    in various business industries in recent years as one of such tools
    for business Growth and Development. Business Intelligence has highly
     been adopted in various business industries in recent years as one of
      such tools for business Growth and Development. At    <strong style={{color:"#2f76f2"}}>PAGO ANALYTICS</strong> we believe that...<strong>More</strong> 
    </Weare>
   
    <Bgimg src={We} style={{borderRadius:"5%",zIndex:4,}}/>
     <div className='circlee'>
     <Circle id='cont' >
    <Circle id='box'></Circle>
   </Circle>
   </div>
   </div>
   </Container>
  )
}

export default Main