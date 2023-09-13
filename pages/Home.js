import Front from "./Components/Front/Front";

import {  useState } from "react";
import { useRouter } from "next/router";

import HomeBody from "./homebody";
import PromptsGallery from "./Components/Front/Prompts";

function Home(props) {
  const router = useRouter();
  const notify = () => toast.success("Succesfully Shared Prompt");
  const [toasts, setToasts] = useState(false);
  const [arrow, showArrow] = useState(true);
  const [header, changeHeader] = useState(false);

  /*useEffect(() => {
    var myElement = document.getElementById("scrolly");
    myElement.addEventListener("scroll", scrollHandler);
  }, []); */

  function scrollHandler(e) {
    var atSnappingPoint = e.target.scrollTop % e.target.offsetHeight === 0;
    var timeOut = atSnappingPoint ? 0 : 150; //see notes

    clearTimeout(e.target.scrollTimeout); //clear previous timeout

    e.target.scrollTimeout = setTimeout(function () {
      console.log("Scrolling stopped!");
    }, timeOut);

    if (!atSnappingPoint) {
      showArrow(false);
      changeHeader(true);
    } else {
      showArrow(true);
      changeHeader(false);
    }
  }

 /* useEffect(() => {
    setToasts(router.query.success);
  }, [router.query]);

  useEffect(() => {
    if (toasts) {
      notify();
      setToasts(false);
    }
  }); */

  return (
    <div className="App">
      <div className="scroll_container" id="scrolly">
        <Front className="coolBlock" downarrow={arrow} />
        <PromptsGallery className="coolBlock" />
        <HomeBody className="coolBlock" />
      </div>
    </div>
  );
}

export default Home;
