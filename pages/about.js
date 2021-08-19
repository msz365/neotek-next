import Head from "next/head";
import Image from "next/image";
import React from "react";
import CallToAction from "../components/CallToAction";
import InfoSection from "../components/InfoSection";
import { homeObjFour, homeObjFive } from "../components/InfoSection/Data";

function about() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>About us | Neotek</title>

        <meta
          name="description"
          content="Large Scale, Table-top & Handheld Analytical Instruments. Field Safety Instruments, Radiation Detection & Monitoring, Consumables, Chemicals & Reagents, Industrial Automation and much more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ marginTop: "-80px" }}></div>
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <CallToAction />
    </div>
  );
}

export default about;