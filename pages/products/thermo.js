import React from "react";
import Head from "next/head";
import ProductPage from "../../components/ProductPage";
import { prodObjOne } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const thermo = () => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>ThermoFisher Scientific | Neotek</title>

        <meta
          name="description"
          content="Handheld Chemical Identifaction,
          Handheld Explosives Detection,
          Handheld Raman Analyzers,
          Handheld FTIRs,
          Handheld Radiation Detection,
          Area Monitoring, 1064 Defender, Trunarc, Gemini"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ProductPage {...prodObjOne} />
      <CallTOAction />
    </div>
  );
};

export default thermo;
