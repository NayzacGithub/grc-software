import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { OrganizationWelcome } from "../components/OrganizationWelcome";

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Pi-Comply | Dashboard</title>
    </Head>
    <Layout>
      <OrganizationWelcome />
      {/* Display a few tables */}

    </Layout>
  </>

};

export default Home;
