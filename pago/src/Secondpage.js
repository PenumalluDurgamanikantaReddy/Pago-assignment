import React,{useState} from 'react'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import ServiceCard from "./ServiceCard"
import uxui from "./mb/mbtotal.png"
import appdev from "./mb/appdev.png"
import testing from "./mb/testing.png"
import lunch from "./mb/lunch.png"

import bi from "./components/imgs/BI.png"
import bd from "./components/imgs/BDD.png"
import bdd from "./components/imgs/BDDD.png"
import dt from "./components/imgs/Dt.png"

import Op from "./components/imgs/opt.png"
import Prof from "./components/imgs/profJpg.png"
import Proff from "./components/imgs/Proff.png"

import Prod from "./components/imgs/Product.png"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Secondpage() {

    const {serviceid}=useParams()

const [subservices,Setsubservices]=useState([{id:"mobiled",name:"Mobile App development",subs:[{name:"UX/UI",img:uxui},{name:"Development",img:appdev},
{name:"Testing",img:testing}  , {name:"Luanch ",img:lunch}],content :"We offer native Mobilebile development for,Native or cross-platform mobile application development Backend reconciliation or distribution on the App Store, Google Play or Microsoft Store.",
secondpara:"We offer native Mobilebile development for iOS, Android,Mobile app consulting,Mobile testing (Unit testing and UI Automation)"} ])

    const Services = [
        {id:"mobiled",  name:"Mobile App development",subs:[{name:"UX/UI",img:uxui},{name:"Development",img:appdev},
        {name:"Testing",img:testing}  , {name:"Luanch ",img:lunch}],content :"We offer native Mobilebile development for,Native or cross-platform mobile application development Backend reconciliation or distribution on the App Store, Google Play or Microsoft Store.",
        secondpara:"We offer native Mobilebile development for iOS, Android,Mobile app consulting,Mobile testing (Unit testing and UI Automation)"},

        {id:"busniessid", name:"Business Intelligence",subs:[{name:"Planing",img:bi},{name:"analysis",img:bd},{name:"DataBase",img:bdd},
       ],content :"Business intelligence  has different meanings to different  people. People  equate BI  with  dashboards  Data warehouse,  ETL tools, BI is not a concept that is  exclusive  to IT professionals.",
        secondpara:"While good information leads to smarter decisions and better results, important decisions of any nature in any business should be based on facts. BI supports the decisions that are made with facts and figures."},
        
        {id:"Digitalid",name:"Digital Transformation",subs:[{name:"digital World",img:dt},
     ],content :"Here, we put together communication and collaboration tools to efficiently enhance the way organizations operate and interact. ",
        secondpara:"Our Digital Transformation process involves mapping out the best digital design flow."},
 
        {id:"Openid",name:"Open Source Techonlogies",subs:[{name:"NewResources",img:Op},
     ],content :"Our Software Architects creates a flow   which  simplifies  usage and  collaboration  of work  with  such  Open-Source  softwares to help developers explore  creative means of  work easily.",
        secondpara:"Our Software Architects creates a flow which simplifies usage and collaboration of work with such Open- Source softwares to help developers explore creative means of work easily."},
       
        {id:"Professionalid",name:"Professional Services",subs:[{name:"Services",img:Prof},{name:"Network",img:Proff},
     ],content :"We're interested to see your business grow with less hassles, offering Professional level business services  like Banking Services, Insurance Services, Telecom services,Healthcare services.which are essential for every business industries.",
        secondpara:"Our Software Architects creates a flow which simplifies usage and collaboration of work with such Open- Source softwares to help developers explore creative means of work easily."},
        
        {id:"Productid",name:"Product Development",subs:[{name:"Innovation",img:Prod},],content :"Creating a New Product is great, but many of such products face commercial failure if the implementation is not well planned.This way,we create a strategic development plan  market success,",
       secondpara:"Our Software Architects creates a flow which simplifies usage and collaboration of work with such Open- Source softwares to help developers explore creative means of work easily."},

]
      
useEffect(()=>{

    console.log(serviceid)
  
    console.log()
    Setsubservices(Services.filter((each)=>{ return each.id===serviceid}))
},[serviceid])



      const Texte = styled('h3')({
        color:"#2f76f2",
        textAlign: "left",
        fontFamily:"Montserrat",
        paddingRight:"2rem",
        fontWeight:"medium",
        fontSize:"2rem",
        margin:0,
        marginTop:"1rem"
      });

            

      const Contenttext = styled('h3')({
        color:"#2f76f2",
        textAlign: "left",
        fontFamily:"Montserrat",
        paddingRight:"2rem",
        fontWeight:"medium",
        fontSize:"1rem",
        margin:0,
        marginTop:"1rem"
      });

      const Header = styled('h3')({
        color:"#193eca",
        textAlign: "justify",
        fontFamily:"Montserrat",
      
        fontWeight:"bolder",
        fontSize:"4rem",
        margin:0,
 
        })
        const Fulldeatails = styled('h3')({
            display: "flex",
            width: "100%",
            marginTop: "2rem",
            paddingLeft: "2rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundColor: "#F4F4F4",
            borderRadius: "0.5rem",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
          });
          

  return (
    <Container>
 
    
    <div style={{paddingRight:"6rem"}}>
<Header>{subservices[0].name}</Header>
<Texte></Texte>

<div style={{display:"flex"}}>
{
    subservices[0].subs.map((each)=>{
        return (<ServiceCard  services={each.name} img={each.img}/>)
    })
}

</div>
<Fulldeatails style={{display:"flex"}}>
<div><img src={subservices[0].subs[0].img} style={{width:"50%"}}/></div>
<div>
<Contenttext>
{subservices[0].content}
<br></br>
<br></br>
<br></br>

{subservices[0].secondpara}

</Contenttext>
</div>
</Fulldeatails>
</div>
  
    </Container>
  )
}

export default Secondpage