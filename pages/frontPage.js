import Header from "./Components/Header/Header";
import Front from "./Components/Front/Front";
import Categories from "./Components/Categories/Categories";
import Carouselle from "./Components/Carouselle/Carouselle";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Components/contexts/UserContext";
import FrontBody from "./Components/Front/FrontBody"

function FrontPage(props) {


  

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Front />
        
      
      </UserProvider>
    </div>
  );
}

export default FrontPage;
