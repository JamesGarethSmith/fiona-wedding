import Hero from "../components/hero";
import Invitation from "../components/invitation";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Hero imgSrc="/images/home_bg_2.jpg">
      <Invitation />
    </Hero>
  </Layout>
);

export default Home;
