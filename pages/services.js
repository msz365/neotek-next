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

        <meta
          name="description"
          content="Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation and much more."
        />
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
