import React from "react";
import Card from "../Cards/Cards"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import Slider  from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carouselle (props){


    const prompts = [


        {Question: "What is Your Name?",
         Answer: "I always dreamed about being stranded on a desert island until it actually happened. ",
         Profile: "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png",
         Categories: ["Music"],
         Author: "John Doe",
         Likes: 5},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8},
         {Question: "What is Your age?",
         Answer: "Standing on one's head at job interviews forms a lasting impression.",
         Profile: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
         Categories: ["Literacy", "Music"],
         Author: "Alex Doe",
         Likes: 2},
         {Question: "What is Your location?",
         Answer: "His thought process was on so many levels that he gave himself a phobia of heights.",
         Profile: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
         Categories: ["Gaming"],
         Author: "John Doe",
         Likes: 8}

    ]


    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return(
        <div onClick={onClick} className={`arrow ${className}`} >
          <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
        </div>
      )
    }
    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return(
        <div onClick={onClick} className={`arrow ${className}`} >
          <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
        </div>
      )
      }
   
   
    var settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        className:"slides",
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }; 

    return(
        <div className="Carouselle">
            <div className="popular">
            <h1>{props.title}</h1>
            
            </div>
<Slider {...settings}>
    
        {prompts? prompts.map((promp,key)=> <Card key={key} style={{ width: 100 }} categories={promp.Categories} profile={promp.Profile} question={promp.Question} answer={promp.Answer} author={promp.Author} like={promp.Likes}/> ) : ""} 
            </Slider>
        </div>
    )

}


export default Carouselle