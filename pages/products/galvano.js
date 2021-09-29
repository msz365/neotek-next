import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjNine } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const galvano = () => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Galvano Scientific | Neotek</title>

        <meta name="title" content="Galvano Scientific | Neotek" />
        <meta
          name="description"
          content="Galvano Scientific is a Pakistan based manufacturer of quality control equipment."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, galvano scientific, hardness tester, dissolution tester, disintegration tester, stability chamber"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="galvano" />
        <meta name="channel" content="galvano" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="galvano" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Galvano Scientific | Neotek" />
        <meta
          itemProp="description"
          content="Galvano Scientific is a Pakistan based manufacturer of quality control equipment."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/galvano"
        />
        <meta property="og:title" content="Galvano Scientific | Neotek" />
        <meta
          property="og:description"
          content="Galvano Scientific is a Pakistan based manufacturer of quality control equipment."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Galvano Scientific | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/galvano"
        />
        <meta property="twitter:title" content="Galvano Scientific | Neotek" />
        <meta
          property="twitter:description"
          content="Galvano Scientific is a Pakistan based manufacturer of quality control equipment."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/galvano"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjNine} />
      <CallTOAction />
    </div>
  );
};

export default galvano;
