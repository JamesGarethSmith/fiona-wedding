import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import FullWidth from "../components/full-width";

const GiftRegistries = () => (
  <Layout>
    <Head>
      <title>Fiona &amp; Ryan | Gift Registries</title>
    </Head>
    <Hero section="gifts">
      <h1>Gift Registries</h1>
    </Hero>
    <FullWidth>
      <p>
        This will be updated at a later date with all the details of the gift
        registry.
      </p>
    </FullWidth>
  </Layout>
);

export default GiftRegistries;
