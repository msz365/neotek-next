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

        <meta
          name="description"
          content="Thermo Fisher, Perkin Elmer, Honwywell, OnQ Soft, QLIMS, LIMS, Gester, Quality Control, Instruments, ERP, Microsoft Dynamics 365, MySCADA, SCADA, Automation, VWR, Chemicals  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Products />
      <CallTOAction />
    </div>
  );
};

export default products;
