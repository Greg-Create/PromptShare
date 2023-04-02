import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState,useEffect } from "react";
import { useProfile } from "../contexts/UserContext";


function profileTab(){
    const session =  useSession();
  const supabase = useSupabaseClient();
  const profile = useProfile()
  const [editName,setEditName] = useState(null)
  


    return(
        <div className="myProfilePageContainer">
        <div className="myProfileContainer">
<h1>My Profile</h1>
<div className="profileBlock">
<h4>Your Details</h4>
<div className="profileGrid">
<div className="editName">
    <p>First Name</p>
    <input value={editName !== null? editName : profile? profile.name: ""} onChange={(e)=>setEditName(e.target.value)} type="text" />
</div>
<div className="editName">
    <p>Last Name</p>
    <input type="text" />
</div>

<div className="editName">
    <p>Email</p>
    <input type="text" />
</div>

<div className="editName">
    <p>About Me</p>
    <textarea/>
</div>

<div className="editName">
    <p>Phone</p>
    <input type="text" />
</div>

<div className="editName">
    <p>Location</p>
    <input type="text" />
</div>
<button className="updateBtn">Update</button>
</div>
</div>
</div>
  <div className="profilePictureContainer">
  <img src={profile? profile.avatar: ""} />
  <button>Upload New Profile Picture</button>
</div>
</div>
    )
}

export default profileTab