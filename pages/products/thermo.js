import React from "react";
import Head from "next/head";
import ProductPage from "../../components/ProductPage";
import { prodObjOne } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const thermo = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Thermo Fisher Scientific | Neotek</title>

        <meta name="title" content="Thermo Fisher Scientific | Neotek" />
        <meta
          name="description"
          content="Thermo Fisher provides a variety of handheld analyzers for elemental analysis, VOC, SVOC, TIC, narcotics, explosives and radiation detection"
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Thermo Fisher Pakistan, Handheld Chemical Identifaction pakistan, radiation detection pakistan, harshaw tld pakistan, explosive detection pakistan, narcotics detection pakistan,
          Handheld Explosives Detection pakistan,
          Handheld Raman Analyzers paksitan,
          Handheld FTIR paksitan,
          Handheld Radiation Detection pakistan,
          Area Monitoring pakistan, 1064 Defender pakistan, Trunarc pakistan, Gemini pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="Thermo Fisher Scientific" />
        <meta name="channel" content="thermo fisher scientific" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="thermo fisher scientific" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Thermo Fisher Scientific | Neotek" />
        <meta
          itemProp="description"
          content="Thermo Fisher provides a variety of handheld analyzers for elemental analysis, VOC, SVOC, TIC, narcotics, explosives and radiation detection"
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/thermo"
        />
        <meta property="og:title" content="Thermo Fisher Scientific | Neotek" />
        <meta
          property="og:description"
          content="Thermo Fisher provides a variety of handheld analyzers for elemental analysis, VOC, SVOC, TIC, narcotics, explosives and radiation detection"
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Thermo Fisher Scientific | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/thermo"
        />
        <meta
          property="twitter:title"
          content="Thermo Fisher Scientific | Neotek"
        />
        <meta
          property="twitter:description"
          content="Thermo Fisher provides a variety of handheld analyzers for elemental analysis, VOC, SVOC, TIC, narcotics, explosives and radiation detection"
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/thermo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductPage {...prodObjOne} />
      <CallTOAction />
    </div>
  );
};

export default thermo;
