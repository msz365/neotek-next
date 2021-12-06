import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjEight } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const gester = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Gester Instruments | Neotek</title>

        <meta name="title" content="Gester Instruments | Neotek" />
        <meta
          name="description"
          content="Gester Instruments provides QC Solutions for footwear, textiles, furniture, PPEs etc."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Gester Instruments Pakistan, Textile testing Pakistan, PPE testing Pakistan, furniture testing Pakistan, footwear testing Pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="gester" />
        <meta name="channel" content="gester" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="gester" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Gester Instruments | Neotek" />
        <meta
          itemProp="description"
          content="Gester Instruments provides QC Solutions for footwear, textiles, furniture, PPEs etc."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/gester"
        />
        <meta property="og:title" content="Gester Instruments | Neotek" />
        <meta
          property="og:description"
          content="Gester Instruments provides QC Solutions for footwear, textiles, furniture, PPEs etc."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Gester Instruments | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/gester"
        />
        <meta property="twitter:title" content="Gester Instruments | Neotek" />
        <meta
          property="twitter:description"
          content="Gester Instruments provides QC Solutions for footwear, textiles, furniture, PPEs etc."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/gester"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjEight} />
      <CallTOAction />
    </div>
  );
};

export default gester;
