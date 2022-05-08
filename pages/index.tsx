import Hero from "../components/hero";
import Layout from "../components/layout";

const Home = () => (
  <Layout>
    <Hero imgSrc="/images/home_bg_2.jpg">
      <h1>Fiona &amp; Ryan</h1>
      <ul>
        <li>15 October 2022</li>
        <li>15h00</li>
        <li>Semi-formal</li>
        <li>Webersberg</li>
      </ul>
      <button className="button">RSVP</button>
    </Hero>
  </Layout>
);

export default Home;
