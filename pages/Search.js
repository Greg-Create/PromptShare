import Header from "../components/Header/Header";
import Front from "../components/Front/Front";
import { useState } from "react";

function Search() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Header />
      <Front input={input} change={setInput} />
      <h3 className="SearchRes">Your Searched For: {input}</h3>
    </div>
  );
}

export default Search;
