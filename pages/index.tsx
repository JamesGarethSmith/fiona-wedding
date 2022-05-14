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
      <Card title="Directions to the venue" url="/directions" />
      <Card
        title="Accommodation near the venue"
        url="/accommodation"
        bg="bouquet"
      />
      <Card title="Gift Registries" url="/directions" bg="succulents" />
    </Block>
    <Block>
      <Card title="Our Love Story" url="/love-story" bg="flowers" />
      <Card title="The Wedding Party" url="/wedding-party" bg="leaves" />
    </Block>
  </Layout>
);

export default Home;
