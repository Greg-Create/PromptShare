import React from "react";
import { useState, } from "react";
import Image from "next/image";
import penguin from "../../../public/isometric_penguin.png";

function Front(props) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);

  function searched() {
    props.change(search);
  }

  return (
    <div className="Front_container">
      <div className={`Front ${show ? "is-visible" : ""}`}>
        <div className="headline">
          <h1>PromptPenguin</h1>

          <h4>
            Explore Various Different Prompts and Questions to discuss with
            OpenAi's Newest project ChatGPT
          </h4>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search For Prompts"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button>Search</button>
        </div>

        <Image  priority src={penguin} alt="penguin" className="prompimg" />
      </div>

      {props.downarrow ? <div className="down-arrow"></div> : ""}
    </div>
  );
}

export default Front;
