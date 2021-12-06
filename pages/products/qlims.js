import React from "react";
import Head from "next/head";
import PorductPage from "../../components/ProductPage";
import { prodObjFour } from "../../components/ProductPage/Data";
import CallTOAction from "../../components/CallToAction";
const qlims = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>OnQ Soft QLIMS | Neotek</title>

        <meta name="title" content="OnQ Soft QLIMS | Neotek" />
        <meta
          name="description"
          content="QLIMS is a LIMS that is SaaS based and compliant with ISO 17025, GMP, 21 CFR Part 11, GDPR, HIPAA etc. "
        />
        <meta
          name="keywords"
          content="Neotek Pakistan, onq soft pakistan, qlims, lims pakistan, lab automation pakistan, lms pakistan, iso 17025 pakistan, gmp pakistan, 21 cfr part 11 pakistan, hipaa pakistan, gdpr pakistan"
        />
        <meta name="robots" content="index, follow" />
        <meta name="pageName" content="QLIMS" />
        <meta name="channel" content="qlims" />
        <meta name="subTopic" content="content" />
        <meta name="contentType" content="qlims" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="autor" content="Mohammad Suleman Zia" />
        <meta name="image" content="https://www.neotek.com.pk/og-image.png" />
        <meta itemProp="name" content="OnQ Soft QLIMS | Neotek" />
        <meta
          itemProp="description"
          content="QLIMS is a LIMS that is SaaS based and compliant with ISO 17025, GMP, 21 CFR Part 11, GDPR, HIPAA etc."
        />
        <meta
          itemProp="image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neotek.com.pk/products/qlims"
        />
        <meta property="og:title" content="OnQ Soft QLIMS | Neotek" />
        <meta
          property="og:description"
          content="QLIMS is a LIMS that is SaaS based and compliant with ISO 17025, GMP, 21 CFR Part 11, GDPR, HIPAA etc."
        />
        <meta
          property="og:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta name="og:site_name" content="OnQ Soft QLIMS | Neotek" />
        <meta name="og:locale" content="en_US" />
        <meta name="fb:admins" content="" />
        <meta name="fb:app_id" content="" />

        <meta
          property="twitter:card"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <meta
          property="twitter:url"
          content="https://www.neotek.com.pk/products/qlims"
        />
        <meta property="twitter:title" content="OnQ Soft QLIMS | Neotek" />
        <meta
          property="twitter:description"
          content="QLIMS is a LIMS that is SaaS based and compliant with ISO 17025, GMP, 21 CFR Part 11, GDPR, HIPAA etc."
        />
        <meta
          property="twitter:image"
          content="https://www.neotek.com.pk/og-image.png"
        />
        <link rel="canonical" href="https://www.neotek.com.pk/products/qlims" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PorductPage {...prodObjFour} />
      <CallTOAction />
    </div>
  );
};

export default qlims;
