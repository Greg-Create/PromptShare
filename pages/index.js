
import React from "react"
import Home from "./Home"
import Search from "./Search"
import Share from "./Share"
import Head from 'next/head';
import { UserContext } from "./Components/contexts/UserContext";
import FrontPage from "./frontPage"



function HomePage() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap" rel="stylesheet"/>
    </Head>
    <Home />
   </>
  )
}

export default HomePage


