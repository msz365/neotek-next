import Head from "next/head";
import Image from "next/image";
import React from "react";
import CallToAction from "../components/CallToAction";
import InfoSection from "../components/InfoSection";
import { homeObjFour, homeObjFive } from "../components/InfoSection/Data";

function about() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>About us | Neotek</title>

        <meta name="title" content="About us | Neotek" />
        <meta
          name="description"
          content="About Neotek Pakistan. What we offer and our commitment to quality solutions."
        />
        <meta name="keywords" content="Neotek Pakistan, About Us" />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="About" />
        <meta name="channel" content="about" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="about" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
       
        <meta itemProp="name" content="About us | Neotek" />
        <meta
          itemProp="description"
          content="About Neotek Pakistan. What we offer and our commitment to quality solutions."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neotek.com.pk/about" />
        <meta property="og:title" content="About us | Neotek" />
        <meta
          property="og:description"
          content="About Neotek Pakistan. What we offer and our commitment to quality solutions."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="About us | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/about"
        />
        <meta property="twitter:title" content="About us | Neotek" />
        <meta
          property="twitter:description"
          content="About Neotek Pakistan. What we offer and our commitment to quality solutions."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link rel="canonical" href="https://www.neotek.com.pk/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ marginTop: "-80px" }}></div>
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <CallToAction />
    </div>
  );
}

export default about;
