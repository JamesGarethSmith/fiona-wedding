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
        Celebrating with you on our special day is the only gift we require.
      </p>
      <p>
        However, if you do wish to celebrate with a gift, we are registered at
        Yuppie Chef and listed a few items in a Google sheet that we'd find the
        most useful as we prepare for married life!
      </p>
      <p>The links:</p>
      <ul>
        <li>
          <a href="https://www.yuppiechef.com/registry.htm?action=view&orderid=6485441">
            Yuppie Chef
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1DeD1MlM_DHaOT0BRjI5tH-6epVidPJSFNSHgXVhSUEw/edit?usp=sharing">
            Google Sheet
          </a>
        </li>
      </ul>
    </FullWidth>
  </Layout>
);

export default GiftRegistries;
