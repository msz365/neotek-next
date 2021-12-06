import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjSix } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const myscada = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>MySCADA | Neotek</title>

        <meta name="title" content="MySCADA | Neotek" />
        <meta
          name="description"
          content="MySCADA provides Industrial Automation Solutions that are compatible with all major PLCs. Rich Interface for development."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, myscada pakistan, scada pakistan, automation pakistan, plc pakistan, hmi pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="myscada" />
        <meta name="channel" content="myscada" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="myscada" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="MySCADA | Neotek" />
        <meta
          itemProp="description"
          content="MySCADA provides Industrial Automation Solutions that are compatible with all major PLCs. Rich Interface for development."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/myscada"
        />
        <meta property="og:title" content="MySCADA | Neotek" />
        <meta
          property="og:description"
          content="MySCADA provides Industrial Automation Solutions that are compatible with all major PLCs. Rich Interface for development."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="MySCADA | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/myscada"
        />
        <meta property="twitter:title" content="MySCADA | Neotek" />
        <meta
          property="twitter:description"
          content="MySCADA provides Industrial Automation Solutions that are compatible with all major PLCs. Rich Interface for development."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/myscada"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjSix} />
      <CallTOAction />
    </div>
  );
};

export default myscada;
