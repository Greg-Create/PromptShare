import React, { useEffect } from "react"
import Logo from '../Front/image.png'
import { useState } from "react";
import Image from "next/image"
import penguin from "../../../public/isometric_penguin.png"


function Front(props) {


const [search, setSearch] = useState("")
const [show,setShow] = useState(true)
const controlNavbar = () =>{
    if(window.scrollY>200){
        setShow(false)
    }else{
        setShow(true)
    }
}

useEffect(()=>{
    window.addEventListener('scroll',controlNavbar) 
    return() =>{
        window.removeEventListener('scroll',controlNavbar)
    }
},[])


   function searched(){
props.change(search)  
 }

 

    return(
        <div className="Front_container">

        <div className={`Front ${show? "is-visible" : ""}`}>
            
            <div className="headline">
            <h1>PromptPenguin</h1>
            
            <h4>Explore Various Different Prompts and Questions to discuss with OpenAi's Newest project ChatGPT</h4>
            </div>
            <div className="searchbar">
            <input type="text" placeholder="Search For Prompts" onChange={(e) => {setSearch(e.target.value)}}></input>
            <button >Search</button>
            </div>

<Image src={penguin} className="prompimg" />              
            </div>
            
        </div>
    )
}

export default Front