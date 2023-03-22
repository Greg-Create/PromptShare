import React from "react";
import Header from "../Components/Header/Header";
import { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from 'next/router';
import SignIn from "../SignInPage/SignIn"





function Share(){
    const categories = ["Eductational","Entertainment", "Gaming", "Programming", "Bipasses", "Music", "Stories", "Jailbreaks"]
    const[valid, setValid] = useState(false);
    const [select,setSelect] = useState([]);
    const [number, setNumber] = useState(0)
    const session = useSession()

    if(!session){
return <SignIn />
    
}

    function toggle(index){

        if(select.includes(index)){
         setSelect(select.filter(function(item){
          return item !== index;
          setValid(true)
         }))
         
         } // only splice array when item is found
            else{
                if(select.length<3){
          setSelect(prevArray => [...prevArray, index])
          setValid(true)
                }
      
        }
    
        }

        function togglehide(index) {
            if (select.includes(index)) {
              return "checked";
            } else {
              return "cate";
            }
          }

    return(
        <div>
        <Header />
        <div className="s"> 
        <div className="share">
            <h1>Share Your Prompt</h1>
          
            <div className="reply">
                <p>Enter Description Of Prompt</p>
                <textarea type="text"></textarea>
            </div>
            <div className="prompt">
                <p>Enter Prompt</p>
                <textarea type="text"></textarea>
            </div>

            <div className="categories">
                <p>Select Up to 3 Categories</p>
                <div className="category_grid">
                {categories? categories.map((cat, index) => <button key={index} onClick={() => toggle(index)} className={`cate ${togglehide(index)}`}>{cat}</button>): ""} 
                </div>
            </div>

            <button className="shareP">Share Prompt</button>
        </div>
        </div>
        </div>
    )
}

export default Share;