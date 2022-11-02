import SupportPage from "@/components/views/components/support/support";
import Head from "next/head";

const Support = () => {
  return (
    <>
      <Head>
        <title>PSPAY - Support</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <SupportPage />
    </>
  );
};

export default Support;
Support.layout = "main";
