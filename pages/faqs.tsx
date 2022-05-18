import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";
import FullWidth from "../components/full-width";

const FAQs = () => (
  <Layout>
    <Head>
      <title>Fiona &amp; Ryan | FAQs</title>
    </Head>
    <Hero section="faqs">
      <h1>FAQs</h1>
    </Hero>
    <FullWidth>
      <p>
        <b>1 What is the COVID protocol for the wedding?</b>
      </p>
      <p>
        Please wear your masks while in close contact with other people. There
        will be hand sanitiser available throughout the wedding. If you are not
        feeling well on the day of the wedding please let Ryan know and stay
        home.
      </p>

      <p>
        <b>2 Can I take photos at the wedding and post on social media?</b>
      </p>
      <p>
        With pleasure take photos and post on social media, but can we please
        ask that you do not get in the way of the professional photographers
        taking photos.
      </p>

      <p>
        <b>3 If you need to contact someone on the day of the wedding?</b>
      </p>
      <p>
        If you need to contact someone on the day of the wedding here is the
        number for the groom Ryan Maggott:&nbsp;
        <a href="tel:0833843658">083 384 3658</a>.
      </p>

      <p>
        <b>4 Will the event take place indoors or outdoors?</b>
      </p>
      <p>
        Both the ceremony and the reception will be indoors. If the weather
        permits the pre-drinks will be outdoors.
      </p>

      <p>
        <b>5 What should I wear? Is there a dress code?</b>
      </p>
      <p>The dress code for our wedding is semi-formal attire.</p>

      <p>
        <b>6 What happens after the ceremony?</b>
      </p>
      <p>
        The wedding party will be taking photos nearby. Guests will be directed
        the pre-drinks area where there will be canapes served and some games
        available to be played.
      </p>

      <p>
        <b>7 What should I do if I can't make it?</b>
      </p>
      <p>
        You will be missed! If you can't make it to the wedding please let us
        know as soon as possible and RSVP no so we can plan accordingly.
      </p>

      <p>
        <b>8 Will there be an open bar?</b>
      </p>
      <p>There will be a cash bar available.</p>

      <p>
        <b>
          9 I have dietary restrictions/allergies. What's the best way to let
          you know?
        </b>
      </p>
      <p>
        We will send out a request for food choice at the wedding. As part of
        this we will ask about any specific dietary restrictions, requirements
        or allergies.
      </p>

      <p>
        <b>10 I still have questions, what is the best way to contact you?</b>
      </p>
      <p>
        Please by all means reach out to me and I will answer you questions. Via
        Whatsapp on <a href="tel:0713846618">071 384 6618</a> or email at{" "}
        <a href="mailto:fiona.caroline.smith@gmail.com">
          fiona.caroline.smith@gmail.com
        </a>
      </p>
    </FullWidth>
  </Layout>
);

export default FAQs;
