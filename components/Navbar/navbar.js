import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useProfile } from "../contexts/UserContext";

function navbar() {
  const [toggled, setToggled] = useState(0);
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const profile = useProfile();

  const navbarMap = [
    { title: "My Profile", icon: <CgProfile className="icons" /> },
    { title: "Edit Profile", icon: <FaRegEdit className="icons" /> },
    { title: "Liked", icon: <FcLike className="icons" /> },
    { title: "Settings", icon: <IoMdSettings className="icons" /> },
    { title: "Logout", icon: <BiLogOut className="icons lastIcon" /> },
  ];

  return (
    <div className="Navbar">
      <div className="profileHeading">
        <img
          className="updateprofilePics"
          src={profile ? profile.avatar : ""}
        />
        <h5>{profile ? profile.name : ""}</h5>
      </div>

      {navbarMap.map((bar, key) => (
        <div
          key={key}
          className={`${toggled == key ? "selected" : "profile-item"} `}
          onClick={() => {
            setToggled(key);
            router.push(
              {
                pathname: "./myProfile",
                query: { pages: key },
              },
              "./myProfile"
            );
          }}
          id={key}
        >
          {bar.icon} <a>{bar.title}</a>
        </div>
      ))}
    </div>
  );
}

export default navbar;
