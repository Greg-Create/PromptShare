import React from "react";
import Header from "../components/Header/Header";
import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

import { useProfile } from "../components/contexts/UserContext";


function Share(props) {
  const categories = [
    "Eductational",
    "Entertainment",
    "Gaming",
    "Programming",
    "Bipasses",
    "Music",
    "Stories",
    "Jailbreaks",
  ];
  const [valid, setValid] = useState(false);
  const [select, setSelect] = useState([]);
  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const profile = useProfile();

  //Focus on a niche, add personalization forms for personalized prompts to promp page;
  //

  /* if (!profile) {
    return <SignIn />;
  } */

  function toggle(index) {
    if (select.includes(index)) {
      setSelect(
        select.filter(function (item) {
          return item !== index;
          setValid(true);
        })
      );
    } // only splice array when item is found
    else {
      if (select.length < 3) {
        setSelect((prevArray) => [...prevArray, index]);
        setValid(true);
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

  function createPost() {
    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        prompt: prompt,
        prompTitle: title,
        categories: select,
      })
      .then((response) => {
        if (!response.error) {
          setPrompt("");
          setTitle("");
          setSelect([]);
        }
      });

    router.push(
      {
        pathname: "/",
        query: { success: true },
      },
      "/"
    );

    console.log("Subbmited");
  }

  return (
    <div>
      <Header />
      <div className="s">
        <div className="share">
          <h1>Share Your Prompt</h1>

          <div className="reply">
            <p>Enter Description Of Prompt</p>
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            ></textarea>
          </div>
          <div className="prompt">
            <p>Enter Prompt</p>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              type="text"
            ></textarea>
          </div>

          <div className="categories">
            <p>Select Up to 3 Categories</p>
            <div className="category_grid">
              {categories
                ? categories.map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => toggle(index)}
                      className={`cate ${togglehide(index)}`}
                    >
                      {cat}
                    </button>
                  ))
                : ""}
            </div>
          </div>

          <button onClick={() => createPost()} className="shareP">
            Share Prompt
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
