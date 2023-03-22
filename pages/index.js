
import React from "react"
import Home from "./Home"
import Search from "./Search"
import Share from "./SharePage/Share"
import Head from 'next/head';



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


