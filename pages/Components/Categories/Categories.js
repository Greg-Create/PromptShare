import React from "react";
import { useEffect,useState,useRef } from "react";
import {FcReading,FcTabletAndroid,FcFilmReel,FcCommandLine,FcLock,FcMusic,FcAssistant, FcButtingIn} from "react-icons/fc";
import Aos from "aos";



function Categories() {
    
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    const iconArray =[
      <FcReading/>,
      <FcFilmReel />,
      <FcTabletAndroid />,
      <FcCommandLine/>,
      <FcLock/>,
      <FcMusic/>,
      <FcAssistant/>,
      <FcButtingIn/>,
    ]
    
    useEffect(() => {
      Aos.init({duration:2000})
      },[])
   
    
   const categories = ["Eductational","Fun", "Gaming", "Programming", "Bipasses", "Music", "Assitant", "Roleplay"]
    
    
    return(
      <div className="categories_Container">
        <h3 className="categorie_heading">Categories:</h3>
        <div className={`Categories `} data-aos="fade-up">
            {categories? categories.map((cat,key) => <button key={key} className={`catBut`}>{iconArray[key]} {cat}</button>): ""
            
        } 
        </div>
        </div>
    )
}


export default Categories
