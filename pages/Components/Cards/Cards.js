import React, { useState,useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { useProfile } from "../contexts/UserContext";


function Cards(props) {
const profile = useProfile()
  const supabase = useSupabaseClient();
  const session = useSession();

  const [like, setlike] = useState(false);
  const [likes, setlikes] = useState(props.likes);


 
  function liked() {
    setlike(true);
    setlikes(likes + 1);
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

  return (
    <div className="card">
      <h4 className="propTitle">{props.question}</h4>
      <h4 className="propAnswer">{props.answer}</h4>
      <p className="viewDiscussion">View entire Discussion </p>
      <div className="">
        {props.categories
          ? props.categories.map((cat) => (
              <button className="cat">{categoriesList[cat]}</button>
            ))
          : ""}
      </div>
      <div className="bottom">
        <div className="user">
          <img className="pic" src={props.profile} />
          <Link href={ "../Components/profile/" +props.authorid }>
            <h5 className="postAuthor">{props.author}</h5>
          </Link>
        </div>

        <div className="likes" onClick={() => liked()}>
          {like ? <AiFillHeart className="liked" /> : <AiFillHeart />}

          <h6>{likes}</h6>
        </div>
      </div>
    </div>
  );
}

export default Cards;
