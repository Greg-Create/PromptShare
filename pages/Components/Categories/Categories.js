import React from "react";
import { useEffect, useState, useRef } from "react";
import {
  FcReading,
  FcTabletAndroid,
  FcFilmReel,
  FcCommandLine,
  FcLock,
  FcMusic,
  FcAssistant,
  FcButtingIn,
} from "react-icons/fc";
import Aos from "aos";

function Categories() {
  const [isVisible, setVisible] = useState(0);

  const domRef = useRef();

  const iconArray = [
    <FcReading />,
    <FcFilmReel />,
    <FcTabletAndroid />,
    <FcCommandLine />,
    <FcLock />,
    <FcMusic />,
    <FcAssistant />,
    <FcButtingIn />,
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  function select(id) {
    setVisible(id);
  }

  const categories = [
    "Featured",
    "Startup",
    "Academic",
    "Programming",
    "Bipasses",
    "Music",
    "Assitant",
    "Roleplay",
  ];

  return (
    <div className="categories_Container">
      <div className={`Categories `}>
        {categories
          ? categories.map((cat, key) => (
              <button
                key={key}
                onClick={() => select(key)}
                className={` defautlCategory ${
                  isVisible == key ? "catBut" : "notSelected"
                }`}
              >
                {" "}
                {cat}
              </button>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Categories;
