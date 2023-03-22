import React, { useState } from "react";

import {AiFillHeart} from "react-icons/ai"

function Cards(props) {

    const [like,setlike] = useState(false)
  

    function liked() {
        setlike(!like)
    }


    return(
        <div className="card">
            <h4>{props.question}</h4>
            <h4>{props.answer}</h4>
            <p>View entire Discussion </p>
            <div className="">
                    {props.categories? 
                     props.categories.map(cat => <button className={`cat`}>{cat}</button>) : ""}
                </div>
            <div className="bottom">
               
            <div className="user">
            <img className="pic" src={props.profile}/>
            <h5>{props.author}</h5>
            </div>
            <div className="likes" onClick={() => liked() }>
               {like?<AiFillHeart className="liked"  /> : <AiFillHeart />}
                
            <h6>{props.like}</h6>
            </div>
            </div>
        </div>
    )
}


export default Cards