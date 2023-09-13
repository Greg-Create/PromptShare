import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/navbar";
import Profile from "../components/Navbar/profileTab";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function myProfile() {
  const router = useRouter();
  const [pages, setPage] = useState(0);
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    setPage(router.query.pages);
  });
  return (
    <div>
      <Header />
      <div className="top">
        <div className="pageContainer">
          <Navbar />
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default myProfile;
