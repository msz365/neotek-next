import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjSeven } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";
const perkin = () => {
  return (
    <div >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Perkin Elmer | Neotek</title>

        <meta name="title" content="Perkin Elmer | Neotek" />
        <meta
          name="description"
          content="Perkin Elmer manufactures analytical instruments like GC-MS, HPLC, UHPLC, LC-MS, ICP-MS, ICP-OES etc."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Perkin Elmer pakistan, HPLC pakistan, GC-MS pakistan, LC-MS pakistan, Clarus pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="perkin" />
        <meta name="channel" content="perkin" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="perkin" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Perkin Elmer | Neotek" />
        <meta
          itemProp="description"
          content="Perkin Elmer manufactures analytical instruments like GC-MS, HPLC, UHPLC, LC-MS, ICP-MS, ICP-OES etc."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/perkin"
        />
        <meta property="og:title" content="Perkin Elmer | Neotek" />
        <meta
          property="og:description"
          content="Perkin Elmer manufactures analytical instruments like GC-MS, HPLC, UHPLC, LC-MS, ICP-MS, ICP-OES etc."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Perkin Elmer | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/perkin"
        />
        <meta property="twitter:title" content="Perkin Elmer | Neotek" />
        <meta
          property="twitter:description"
          content="Perkin Elmer manufactures analytical instruments like GC-MS, HPLC, UHPLC, LC-MS, ICP-MS, ICP-OES etc."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/perkin"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjSeven} />
      <CallTOAction />
    </div>
  );
};

export default perkin;
