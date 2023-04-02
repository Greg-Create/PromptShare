import React from "react";
import Header from "./Components/Header/Header";
import { UserProvider } from "./Components/contexts/UserContext";


function profilePage(){
return(

    <div>
        <UserProvider>
    <Header/>
    <h1>Profile Page</h1>
    </UserProvider>
    </div>
)
}

export default profilePage