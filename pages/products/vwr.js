import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjThree } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const vwr = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>VWR a part of Avantor | Neotek</title>

        <meta name="title" content="VWR a part of Avantor | Neotek" />
        <meta
          name="description"
          content="VWR part of Avantor provides a wide variety of lab equipment, instruments, chemicals, reagents and consumables"
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, vwr pakistan, chemicals pakistan, lab consumables pakistan, lab reagents pakistan, anayltical instruments pakistan, lab equipment paksitan, lab furniture pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="VWR" />
        <meta name="channel" content="vwr" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="vwr" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="VWR a part of Avantor | Neotek" />
        <meta
          itemProp="description"
          content="VWR part of Avantor provides a wide variety of lab equipment, instruments, chemicals, reagents and consumables"
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/vwr"
        />
        <meta property="og:title" content="VWR a part of Avantor | Neotek" />
        <meta
          property="og:description"
          content="VWR part of Avantor provides a wide variety of lab equipment, instruments, chemicals, reagents and consumables"
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="VWR a part of Avantor | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/vwr"
        />
        <meta
          property="twitter:title"
          content="VWR a part of Avantor | Neotek"
        />
        <meta
          property="twitter:description"
          content="VWR part of Avantor provides a wide variety of lab equipment, instruments, chemicals, reagents and consumables"
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link rel="canonical" href="https://www.neotek.com.pk/products/vwr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjThree} />
      <CallTOAction />
    </div>
  );
};

export default vwr;
