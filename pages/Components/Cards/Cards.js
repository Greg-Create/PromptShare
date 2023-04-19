import React, { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useProfile } from "../contexts/UserContext";
import myProfile from "@/pages/myProfile";
import { useRouter } from "next/router";
import {FcReading,FcTabletAndroid,FcFilmReel,FcCommandLine,FcLock,FcMusic,FcAssistant, FcButtingIn} from "react-icons/fc";


function Cards(props) {
  const profile = useProfile();
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const [like, setlike] = useState([]);
  const [liked, setliked] = useState(false);

  useEffect(() => {
    fetchLikes();
  }, []);

  async function fetchLikes() {
   await supabase
      .from("likes")
      .select()
      .eq("post_id", props.id)
      .then((result) => setlike(result.data));
  }

  const likedbyme = !!like?.find((like) => like.user_id === profile?.id);

  function likedThisPost() {
    if(!profile){
      router.push({pathname:"../SignIn"})
    }
    if (likedbyme) {
      supabase
        .from("likes")
        .delete()
        .eq("post_id", props.id)
        .eq("user_id", profile.id)
        .then((result) => {
          console.log(result);
          fetchLikes();
        });
      return;
    }
    if(profile){
    supabase
      .from("likes")
      .insert({
        post_id: props.id,
        user_id: profile.id,
      })
      .then((result) => {
        fetchLikes();
      });
    }
  }

  const categoriesList = [
    "Eductational",
    "Entertainment",
    "Gaming",
    "Programming",
    "Bipasses",
    "Music",
    "Stories",
    "Jailbreaks",
  ];

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

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      router.push({
        pathname: "../Components/CardPage/" +props.id,
        query: { 
          id: props.id, 
          author: props.authorid
          },
      });
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <h4 className="propTitle">{props.question}</h4>
      <h4 className="propAnswer">{props.answer}</h4>
      <div className="card_categories">
        {props.categories
          ? props.categories.map((cat) => (
              <button className="cat">{iconArray[cat]} {categoriesList[cat]} </button>
            ))
          : ""}
      </div>
      <div className="bottom">
        <div className="user">
          <img className="pic" src={props.profile} />
          <Link className="link" href={"../Components/profile/" + props.authorid}>
            <h5 className="postAuthor">{props.author}</h5>
          </Link>
        </div>

        <div className="likes" onClick={() => likedThisPost()}>
          {likedbyme ? <AiFillHeart className="liked" /> : <AiFillHeart />}

          <h6>{like?.length}</h6>
        </div>
      </div>
    </div>
  );
}

export default Cards;
