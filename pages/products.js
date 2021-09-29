import React from "react";
import Products from "../components/Products";
import Head from "next/head";
import CallTOAction from "../components/CallToAction";

const products = () => {
  return (
    <div div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Products | Neotek</title>

        <meta name="title" content="Products | Neotek" />
        <meta
          name="description"
          content="We are official distributors of Thermo Fisher Scientific, Honeywell, Onq Soft, Myscada, Microsoft Dynamics 365, Perkin Elmer, VWR etc."
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, Thermo Fisher Scientific, Perkin Elmer, Honeywell, OnQ Soft, QLIMS, LIMS, Gester, Quality Control, Instruments, ERP, Microsoft Dynamics 365, MySCADA, SCADA, Automation, VWR, Chemicals"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="Products" />
        <meta name="channel" content="products" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="products" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
       
        <meta itemProp="name" content="Products | Neotek" />
        <meta
          itemProp="description"
          content="We are official distributors of Thermo Fisher Scientific, Honeywell, Onq Soft, Myscada, Microsoft Dynamics 365, Perkin Elmer, VWR etc."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.neotek.com.pk/products" />
        <meta property="og:title" content="Products | Neotek" />
        <meta
          property="og:description"
          content="We are official distributors of Thermo Fisher Scientific, Honeywell, Onq Soft, Myscada, Microsoft Dynamics 365, Perkin Elmer, VWR etc."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="Products | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products"
        />
        <meta property="twitter:title" content="Products | Neotek" />
        <meta
          property="twitter:description"
          content="We are official distributors of Thermo Fisher Scientific, Honeywell, Onq Soft, Myscada, Microsoft Dynamics 365, Perkin Elmer, VWR etc."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link rel="canonical" href="https://www.neotek.com.pk/products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Products />
      <CallTOAction />
    </div>
  );
};

export default products;
