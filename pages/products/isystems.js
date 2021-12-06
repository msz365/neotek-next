import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjFive } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const isystems = () => {
  return (
    <div >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Intelligent Systems | Neotek</title>

        <meta name="title" content="Intelligent Systems | Neotek" />
        <meta
          name="description"
          content="Intelligent Systems Bulgaria is a Microsoft Gold Partner providing ERP Solutions based on Dynamics 365"
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, microsoft pakistan, intelligent systems, dynamics 365 pakistan, erp pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="isystems" />
        <meta name="channel" content="isystems" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="isystems" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="Intelligent Systems | Neotek" />
        <meta
          itemProp="description"
          content="Intelligent Systems Bulgaria is a Microsoft Gold Partner providing ERP Solutions based on Dynamics 365"
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/isystems"
        />
        <meta property="og:title" content="Intelligent Systems | Neotek" />
        <meta
          property="og:description"
          content="Intelligent Systems Bulgaria is a Microsoft Gold Partner providing ERP Solutions based on Dynamics 365"
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Intelligent Systems | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/isystems"
        />
        <meta property="twitter:title" content="Intelligent Systems | Neotek" />
        <meta
          property="twitter:description"
          content="Intelligent Systems Bulgaria is a Microsoft Gold Partner providing ERP Solutions based on Dynamics 365"
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link
          rel="canonical"
          href="https://www.neotek.com.pk/products/isystems"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjFive} />
      <CallTOAction />
    </div>
  );
};

export default isystems;
