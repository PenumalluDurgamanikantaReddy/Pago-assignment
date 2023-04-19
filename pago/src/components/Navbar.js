import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';



import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const hisoty=useHistory()
  const [drawerOpen, setDrawerOpen] = useState(false);

  let navdata=[{name:"Serverices",options:["Mobile App Development","Business Intelligence","Digital Transformation","Open Source Techonlogies","Professional Services",
  "Product Development"],ids:["mobiled","busniessid","Digitalid","Openid","Professionalid","Productid"]},
  {name:"Partners",options:["Microsoft","sonoflake","Erwin","Yellowfin Bi"]}
]

  const RightAlignedToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
    '& > *': {
      margin: '0 1rem',
    },
  });

  const StyledTypography = styled(Typography)({
    flexGrow: 1,
    "&:hover":{
  
         color:"white",
         cursor:"pointer"
      },
  });

  const HistoryHandler=()=>{
    console.log("hello")
    hisoty.push(`/aboutus`)
 
  }




  return (
    <AppBar position="static" color='transparent' >
      <Toolbar style={{display:'flex',alignContent:""}}>

      <Link to="/aboutus" style={{textDecoration: 'none',}}> <StyledTypography variant="h6" component="div" onClick={HistoryHandler} style={{color:"#193eca"}} >
      HOME
        </StyledTypography></Link> 
        <StyledTypography variant="h6" component="div" style={{color:"#193eca"}} >
      ABOUT US
      </StyledTypography>

      {
        navdata.map((each)=>{
      return( <StyledTypography variant="h6"   component="div"> <FadeMenu name={each.name.toLowerCase()} data={each.options} ids={each.ids} /></StyledTypography>)
        })
    }
    

    <StyledTypography variant="h6" component="div" style={{color:"#193eca"}} >
CAREERS
  </StyledTypography>


  <div style={{display:"flex",paddingLeft:"50%",justifyContent:"center",alignItems:"center",gap:"1rem"}}>
  <StyledTypography variant="h6" component="div" style={{color:"#193eca"}} >

CONTACT US
    </StyledTypography>

         <FacebookIcon style={{color:"blue"}}/>
         <TwitterIcon  style={{color:"blue"}} />
         <InstagramIcon  style={{color:"white",background:'linear-gradient(to right, #FEDA75, #FA7E1E, #D62976, #962FBF)',
        borderRadius:"6px"}} />
        <LinkedInIcon  style={{color:"blue",borderRadius:"10px"}}/>
         <WhatsAppIcon style={{backgroundColor:"green",borderRadius:"50%",color:"white"}} />

    

     </div>
   
      
      </Toolbar>
     
    </AppBar>
  );
};



export function FadeMenu({name,data,ids}) {
  const hisoty=useHistory()
    const StyledTypography = styled(Typography)({
        flexGrow: 1,
      });
      const HistoryHandler=(id)=>{

        hisoty.push(`/services/${id}`)
        handleClose()
      }

    const Typo=styled("div")(({ theme })=>({
        fontSize:"1.5rem",
        fontWeight:"400",
        cursor:"pointer",
        color: "black",
      fontFamily: 'Montserrat',
       [theme.breakpoints.down("xl")] :{
         fontSize:"1rem",
         cursor:"pointer",
       }
     }))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
   
    };
  
    return (
      <div style={{ zIndex:2,}}>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        <StyledTypography variant="h6" component="div">{name.toLowerCase()} </StyledTypography>  
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
        {
            data.map((each,index)=>{
             
                return( <MenuItem  onClick={()=>{HistoryHandler(ids[index])}} ><StyledTypography>{each}</StyledTypography></MenuItem>)
            })
        }
       
        </Menu>
      </div>
    );
  }













export default Navbar;
