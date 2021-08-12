import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjThree } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const vwr = () => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>VWR A Part of Avantor | Neotek</title>

        <meta
          name="description"
          content="Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjThree} />
      <CallTOAction />
    </div>
  );
};

export default vwr;
