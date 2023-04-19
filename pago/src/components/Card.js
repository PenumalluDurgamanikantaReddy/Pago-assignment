import React from 'react'
import "./Card.css"
import Productjpg from "./imgs/Productjpg.png"

import { useHistory } from 'react-router-dom'


function Card({img,service,vector,about,id}) {

const history=useHistory()

const newid=id

const HistoryHandler=()=>{

	history.push(`/services/${newid}`)
	
  }



  return (
   
  <div className="row">
   
       


  <div className="column">
	<div className="card">
	  <div className="content">
		<div className="front">
		<p  className="profile" style={{textAlign:"left"}} >
     
		{about}
	  </p>
		  <h2 style={{maxWidth:"1rem"}}>{service}</h2>
		</div>
		<div className="back from-bottom" style={{position:"absolute",right:"8rem"}}>
	      <button style={{zIndex:1,position:"absolute",left:"5rem",
		  border:"0px solid",top:"8rem",width:"6rem",
		  height:"3rem",borderRadius:"4px",color:"white",backgroundColor:"#2f76f2",fontSize:"1rem"}} onClick={HistoryHandler}>More</button>
		  <img className="des"   width="120%" src={img} alt="Ronaldo" style={{borderRadius:"15px",margin:0}}/>
		
		  
		</div>
	  </div>
	</div>
  </div>



  
</div>
        	
  )
}

export default Card