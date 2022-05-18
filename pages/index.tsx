import Card from "../components/card";
import Block from "../components/block";
import Hero from "../components/hero";
import Head from "next/head";

import Invitation from "../components/invitation";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Head>
      <title>Fiona &amp; Ryan</title>
    </Head>
    <Hero section="invitation">
      <Invitation />
    </Hero>
    <Block>
      <Card title="Directions to the venue" url="/directions" />
      <Card
        title="Accommodation near the venue"
        url="/accommodation"
        bg="bouquet"
      />
      <Card title="Gift Registries" url="/gift-registries" bg="succulents" />
    </Block>
    <Block>
      <Card title="Our Love Story" url="/love-story" bg="flowers" />
      <Card title="The Wedding Party" url="/wedding-party" bg="leaves" />
    </Block>
  </Layout>
);

export default Home;
