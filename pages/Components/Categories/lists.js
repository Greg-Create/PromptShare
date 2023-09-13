import React from "react";
import Essay from "../../../public/essay.jpg"
import Image from "next/image";
import Spaceship from "../../../public/spaceship.jpg"
import Computer from "../../../public/computer.webp"
import {BiCategoryAlt} from "react-icons/bi"


function Lists() {
  return (
    <>
    <p className="list_heading">Explore Many different lists containing some of the best prompts for ChatGPT</p>
    <div className="lists_container">
      <div className="list" ><Image className="list_image" src={Computer} alt="computer"/><div className="centered">Coding</div></div>
      <div className="list"><Image className="list_image" src={Essay} alt="essay"/><div className="centered">Essay Writing</div></div>
      <div className="list" ><Image className="list_image" src={Spaceship} alt="spaceship" /><div className="centered">Startups</div></div>


    </div>
    <button className="viewMore"><BiCategoryAlt /> View Lists</button>
    </>
  );
}

export default Lists;
