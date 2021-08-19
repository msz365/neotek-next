import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjNine } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";

const galvano = () => {
  return (
    <div style={{ marginTop: "-100px" }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Galvano Scientific | Neotek</title>

        <meta
          name="description"
          content="Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjNine} />
      <CallTOAction />
    </div>
  );
};

export default galvano;