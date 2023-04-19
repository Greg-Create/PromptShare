import React, { useContext, useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const UserContext = React.createContext();
const UserUpdate = React.createContext();
const UserLogout = React.createContext();

export function userProfileLogout() {
  return useContext(UserLogout);
}

export function useProfile() {
  return useContext(UserContext);
}

export function useProfileUpdate() {
  return useContext(UserUpdate);
}

export function UserProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const session = useSession();
  const supabase = useSupabaseClient();

  function updatePrfile() {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  }

  function logout() {
    setProfile(null);
  }

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  }, [session?.user?.id]);

  return (
    <UserContext.Provider value={profile}>
      <UserUpdate.Provider value={updatePrfile}>
        <UserLogout.Provider value={logout}>{children}</UserLogout.Provider>
      </UserUpdate.Provider>
    </UserContext.Provider>
  );
}
