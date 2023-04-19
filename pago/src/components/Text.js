import React from 'react'

import { styled } from '@mui/material/styles';

function Text() {
  
    const Titletext = styled("p")({
   
        fontSize:"2rem",
        fontWeight:"bold",
        cursor:"pointer",
       color:"red",
       fontFamily: 'Montserrat',
   });
  return (
    <Titletext >We provide solutions for your business & Services!</Titletext>
  )
}

export default Text