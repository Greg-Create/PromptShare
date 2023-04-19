import React from "react";
import Logo from "../Front/image.png";
import { useState, useEffect } from "react";
import Image from "next/image";
import backgroundImg from "../../../public/penguin.png";
import penguin from "../../../public/penguinReading.png";
import smartpenguin from "../../../public/smart_penguin.png";

function FrontBody(props) {
   
  
  
  
   
  
  
  
  
    return (
    <div className={`FrontBody`}>
        <div className="grid">
      <div className="tab">
        <h1>About Prompt Penguin</h1>
       
        <div className="aboutContainer">
          <button>Learn More</button>
          <Image className="readingIcon" src={penguin} />
        </div>
      </div>

      <div className="tab">
        <h1>Explore Prompts</h1>
        <div className="exploreContainer">
          <Image className="readingIcon2" src={smartpenguin} />
          <button>Explore</button>
        </div>
      </div>

      <div className="tab">
        <h1>Share your Prompts</h1>
        <div className="exploreContainer">
          <Image className="readingIcon2" src={smartpenguin} />
          <button >Share</button>
        </div>
      </div>

      <div className="tab">
        <h1>Prompt Creator</h1>
        <div className="exploreContainer">
          <Image className="readingIcon2" src={smartpenguin} />
          <button>Create</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FrontBody;
