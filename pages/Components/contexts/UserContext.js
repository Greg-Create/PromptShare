import React, { useContext, useState,useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";


const UserContext = React.createContext();


export function useProfile(){
    return useContext(UserContext)
}



export function UserProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const session = useSession();
  const supabase = useSupabaseClient();
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
    <UserContext.Provider value={profile}>{children}</UserContext.Provider>
  );
}
