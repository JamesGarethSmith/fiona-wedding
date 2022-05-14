import Card from "../components/card";
import Block from "../components/block";
import Hero from "../components/hero";
import Invitation from "../components/invitation";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Hero section="invitation">
      <Invitation />
    </Hero>
    <Block>
      <Card
        title="Directions"
        description="Click here for directions and map"
        url="/directions"
      />
      <Card
        title="Directions"
        description="Click here for directions and map"
        url="/directions"
      />
      <Card
        title="Directions"
        description="Click here for directions and map"
        url="/directions"
      />
    </Block>

    <Block>
      <Card
        title="Directions"
        description="Click here for directions and map"
        url="/directions"
      />
      <Card
        title="Directions"
        description="Click here for directions and map"
        url="/directions"
      />
    </Block>
  </Layout>
);

export default Home;
