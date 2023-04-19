
import React from 'react'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import "./caro.css"
import { Button } from '@mui/material';
function Footer() {

        
  const Form = styled("div")({
    display: 'flex',
    justifyContent: 'justify',
     backgroundColor:"#2C3333"
   });

   const Weare = styled('div')({
   
    width: "30%",
    height: '70%',
    padding:"10px"

  });

  return (
    <div style={{width:"100vh",paddingRight:"51%",backgroundColor:"#2C3333",}}>
    <Container style={{color:"white",width:"100vh",marginLeft:"50%",}}>
 <div style={{display:"flex",  backgroundColor:"#2C3333",width:"100vh",paddingTop:"2rem",paddingBottom:"4rem"}}>
    <Weare   style={{display:"flex",flexDirection:"column",textAlign:"left",}}>
    <strong style={{fontFamily:"Montserrat"}}>PAGO ANALYTICS</strong>
    PAGO Analytics is an Advanced Analytics organization,
     providing consulting and project delivery services &
    solutions, taking into account ventures everything being
    equal, crosswise over various enterprises, for example,
    Healthcare, Retail and Consumer Industries, BFSI.
    </Weare>
    <div >
    <strong>LOCATIONS</strong>
    <div>
    <strong>India</strong>
    <ul style={{listStyle:"none",textAlign:"left"}}>
    <li>IIIT Hyderabad,</li>
    <li>Professor CR Rao Rd,Gachibowli,</li>
    <li>Telangana 500032.</li>
    <li><strong>Phone:</strong> +91 6301980315</li>
    <strong>Email:</strong>
    <li>askusanything@pagoanalytics.com</li>
    </ul>
    <strong>OUR NEWSLETTER</strong>
<br></br>
<br></br>
    <strong>Subscribe to our Newsletter</strong>
    <br></br>
    <span><input/><button style={{backgroundColor:"#193eca",color:"white",border:"0px solid "}}>Subscribe</button></span>
    </div>
    
    </div>
    <div>
    <strong>U.K</strong>
    <ul style={{listStyle:"none",textAlign:"left"}}>
    <li>71-75,</li>
    <li>Shelton Street, Covent Garden,</li>
    <li>London, WC2H9JQ.</li>
    </ul>

    <strong>U.S</strong>
    <ul style={{listStyle:"none",textAlign:"left"}}>
    <li>28345 Beck Rd,</li>
    <li>Wixom, Michigan 48393.</li>
    </ul>
    </div>
   </div>
   </Container>
    
    </div>
  )
}

export default Footer;