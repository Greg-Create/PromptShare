import React, { useContext, useEffect, useState,useRef } from "react";
import Card from "../Cards/Cards";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useProfile, UserContext } from "../contexts/UserContext";
import Aos from "aos";
import "aos/dist/aos.css"



function Carouselle(props) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const profile = useProfile()
  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef();
  
  useEffect(() => {
Aos.init({duration:2000})
},[])

    

 


  useEffect(() => {
    supabase
      .from("posts")
      .select("id,prompt,categories,prompTitle,created_at,likes,profiles(id, avatar,name)")
      .then((result) =>{ 
        setPosts(result.data)});
  }, []);


  




  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowRight class="arrows" style={{ color: "white" }} />
      </div>
    );
  }
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <AiOutlineArrowLeft class="arrows" style={{ color: "white" }} />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" className={`Carouselle `} ref={domRef}>
      <div className="popular">
        <h1>{props.title}</h1>
      </div>
      <Slider {...settings}>
        {posts
          ? posts.map((promp, key) => (
              <Card
                key={key}
                style={{ width: 100 }}
                categories={promp.categories}
                profile={promp.profiles.avatar}
                question={promp.prompTitle}
                answer={promp.prompt}
                author={promp.profiles.name}
                id={promp.id}
                likes={promp.likes}
                authorid={promp.profiles.id}
              />
            ))
          : ""}
      </Slider>
    </div>
  );
}

export default Carouselle;
