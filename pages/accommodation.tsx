import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/hero";
import FullWidth from "../components/full-width";

const Accommodation = () => (
  <Layout>
    <Head>
      <title>Fiona &amp; Ryan | Accommodation</title>
    </Head>
    <Hero section="accommodation">
      <h1>Accommodation</h1>
    </Hero>
    <FullWidth>
      <p>
        There is accommodation available on Webersburg Wine Estate but if you
        look online it is all booked out for the wedding.
      </p>
      <p>
        Please email Webersburg and they will be able to assist you with making
        a booking.
      </p>
      <ul>
        <li>
          <a href="https://webersburg.co.za/accommodation/">Website</a>
        </li>
        <li>
          <a href="tel:+27218813636">Telephone: +27 (0)21 881 3636</a>
        </li>
        <li>
          <a href="mailto:guesthouse@webersburg.co.za">
            Email: guesthouse@webersburg.co.za
          </a>
        </li>
      </ul>
      <p>The following accommodation is very close by to the venue:</p>
      <h2>Jacana Guest Farm</h2>
      <ul>
        <li>
          <a href="https://www.jacanafarm.co.za/accommodation.php">Website</a>
        </li>
        <li>
          <a href="tel:+27218813142">Telephone : +27 (0)21 881 3142</a>
        </li>
        <li>
          <a href="mailto:info@jacanafarm.co.za">
            Email: info@jacanafarm.co.za
          </a>
        </li>
      </ul>
      <h2>Eikendal Lodge</h2>
      <ul>
        <li>
          <a href="https://eikendallodge.com/">Website</a>
        </li>
        <li>
          <a href="tel:+27218553617">Telephone: +27 21 855 3617</a>
        </li>
        <li>
          <a href="mailto:info@eikendallodge.co.za">
            Email: info@eikendallodge.co.za
          </a>
        </li>
      </ul>
    </FullWidth>
  </Layout>
);

export default Accommodation;
