import Hero from "../components/hero";
import Layout from "../components/layout";
import FullWidth from "../components/full-width";
import Spacer from "../components/spacer";

const Directions = () => (
  <Layout>
    <Hero section="directions">
      <h1>Directions</h1>
    </Hero>
    <FullWidth>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6211592211903!2d18.83850811573228!3d-34.002263333430555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4cb9c41edeb3%3A0x1b8691d95ca344ec!2sWebersburg%20Wine%20Estate!5e0!3m2!1sen!2sza!4v1652448246414!5m2!1sen!2sza"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </FullWidth>
  </Layout>
);

export default Directions;
