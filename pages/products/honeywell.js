import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjTwo } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const honeywell = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Honeywell | Neotek</title>

        <meta name="title" content="Honeywell | Neotek" />
        <meta
          name="description"
          content="Honeywell provides Safety Solutions including FSIs like portable gas detectors, area monitoring etc."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Honeywell Pakistan, SPS Pakistan, FSI Pakistan, BW Ultra Pakistan, gas detection pakistan, safety pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="honeywell" />
        <meta name="channel" content="honeywell" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="honeywell" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Honeywell | Neotek" />
        <meta
          itemProp="description"
          content="Honeywell provides Safety Solutions including FSIs like portable gas detectors, area monitoring etc."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/honeywell"
        />
        <meta property="og:title" content="Honeywell | Neotek" />
        <meta
          property="og:description"
          content="Honeywell provides Safety Solutions including FSIs like portable gas detectors, area monitoring etc."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Honeywell | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/honeywell"
        />
        <meta property="twitter:title" content="Honeywell | Neotek" />
        <meta
          property="twitter:description"
          content="Honeywell provides Safety Solutions including FSIs like portable gas detectors, area monitoring etc."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/honeywell"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjTwo} />
      <CallTOAction />
    </div>
  );
};

export default honeywell;
