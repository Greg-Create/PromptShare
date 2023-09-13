import "@/styles/globals.css";
import "@/styles/App.css";
import "@/styles/cards.css";
import "@/styles/Carouselle.css";
import "@/styles/categories.css";
import "@/styles/front.css";
import "@/styles/header.css";
import "@/styles/Home.module.css";
import "@/styles/share.css";
import "@/styles/signin.css";
import "@/styles/profile.css";
import "@/styles/userProfile.css";
import "@/styles/postPage.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { UserProvider } from "./Components/contexts/UserContext";

export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}     >
        <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
    </SessionContextProvider>
  );
}
