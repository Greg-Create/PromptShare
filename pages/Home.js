import Header from "./Components/Header/Header";
import Front from "./Components/Front/Front";
import Categories from "./Components/Categories/Categories";
import Carouselle from "./Components/Carouselle/Carouselle";
import { useEffect, useState,useRef} from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Components/contexts/UserContext";

function Home(props) {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const notify = () => toast.success("Succesfully Shared Prompt");
  const [toasts, setToasts] = useState(false);

  

  useEffect(() => {
    setToasts(router.query.success);
  }, [router.query]);

  useEffect(() => {
    if (toasts) {
      notify();
      setToasts(false);
    }
  });

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Front />
        <Categories />
        <Carouselle title={"Popular"} />
        <Carouselle title={"Recent"} />
        <Carouselle title={"Movies"} />
        <Carouselle title={"Bipasses"} />
        <ToastContainer pauseOnHover={false} />
      </UserProvider>
    </div>
  );
}

export default Home;
