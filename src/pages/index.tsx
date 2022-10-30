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
      <img src="/images/dashboard.png" alt="bank" />

    </Layout>
  </>

};

export default Home;
