import React from "react"
import Logo from '../Front/image.png'
import { useState } from "react"



function Front(props) {


const [search, setSearch] = useState("")


   function searched(){
props.change(search)  
 }

 

    return(
        <div className="Front_container">

        <div className="Front">
            
            <div className="headline">
            <h1>ChatGPT</h1>
            
            <h4>Explore Various Different Prompts and Questions to discuss with OpenAi's Newest project ChatGPT</h4>
            </div>
            <div className="searchbar">
            <input type="text" placeholder="Search For Prompts" onChange={(e) => {setSearch(e.target.value)}}></input>
            <button >Search</button>
            </div>
            </div>
            <img className="image" src={"./image.png"} />
            
        </div>
    )
}

export default Front