import React from "react";
import ProductPage from "../components/ProductPage";
import {
  servObjOne,
  servObjThree,
  servObjTwo,
} from "../components/ProductPage/Data";
import Head from "next/head";
import CallTOAction from "../components/CallToAction";

const services = () => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Services | Neotek</title>

        <meta name="title" content="Services | Neotek" />
        <meta
          name="description"
          content="We provide various servicing options for corrective and preventive maintenance."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Service Level Agreements, SLA, CAPA, corrective and preventive maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="Services" />
        <meta name="channel" content="services" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="services" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />

        <meta itemProp="name" content="Services | Neotek" />
        <meta
          itemProp="description"
          content="We provide various servicing options for corrective and preventive maintenance."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neotek.com.pk/services" />
        <meta property="og:title" content="Services | Neotek" />
        <meta
          property="og:description"
          content="We provide various servicing options for corrective and preventive maintenance."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Services | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/services"
        />
        <meta property="twitter:title" content="Services | Neotek" />
        <meta
          property="twitter:description"
          content="We provide various servicing options for corrective and preventive maintenance."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link rel="canonical" href="https://www.neotek.com.pk/services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductPage {...servObjOne} />
      <ProductPage {...servObjTwo} />
      <ProductPage {...servObjThree} />
      <CallTOAction />
    </div>
  );
};

export default services;
