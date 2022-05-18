import Head from "next/head";
import FullWidth from "../components/full-width";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Profile from "../components/profile";

const WeddingParty = () => (
  <Layout>
    <Head>
      <title>Fiona &amp; Ryan | Wedding Party</title>
    </Head>
    <Hero section="wedding">
      <h1>The wedding party</h1>
    </Hero>
    <FullWidth>
      <Profile
        image={{
          url: "/images/profile/christine-min.png",
          width: 1280,
          height: 962,
        }}
      >
        <h1>Maid of Honour - Christine van der Merwe</h1>
        <p>
          Christine and I have known each other since she joined Wynberg Girls
          in high school and joined the group of girls I was friends with. At
          high school we were not particularly close. It was when we both went
          to Stellenbosch University to study bachelor of accounting and to work
          towards becoming CAs that we got close.
        </p>
        <p>
          In the years at university Christine and I got to know each other so
          well that she understands me in a way that no one else has until Ryan.
          Our paths separated towards the end of our studies but we still stayed
          best friends all the while. We each took our own path in becoming
          qualified CAs. I was blessed to be the maid of honour at
          Christine&apos;s wedding to Kyle and now at my wedding she will do me
          the honour of being my maid of honour.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/stacey-min.jpg",
          width: 1999,
          height: 1333,
        }}
        flipped={true}
      >
        <h1>Bridesmaid - Stacey Maggott</h1>
        <p>
          Stacey is Ryan&apos;s younger sister and I met her the same time that
          I met Ryan. Part of how I enjoyed the Bible study was meeting Stacey
          and her views that she raised in the sessions
        </p>
        <p>
          Over the years that I have been dating Ryan I have gotten to know
          Stacey better and not to sound too much like an older sister already
          watching her grow and make difficult decisions like choosing to change
          from studying engineering to training to become a nurse. I am honoured
          that she accepted to be one of my bridesmaids with me on the special
          day.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/anouk-min.png",
          width: 477,
          height: 608,
        }}
      >
        <h1>Bridesmaid - Anouk Smith</h1>
        <p>
          Anouk is my sister-in-law and I could not have asked for a more
          amazing older sister. She puts in so much effort and thought to all
          projects she takes on. Brings so much love to all occasions and the
          people that are part of those occasions. I was blessed to be one of
          Anouk&apos;s bridesmaids at the wedding of Anouk and my brother. I
          knew my day would not be right without the warmth and joy that Anouk
          will bring being one of my bridesmaids at the wedding and lucky for me
          she agreed to be a bridesmaid.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/michelle.jpg",
          width: 1685,
          height: 1999,
        }}
        flipped={true}
      >
        <h1>Bridesmaid - Michelle Hamilton Long</h1>
        <p>
          Michelle is a colleague that I met at my previous job. When she joined
          Maven I helped to onboard Michelle and we very quickly became good
          friends. A week was not a good week if we did not get to fit in one of
          our good long meetings chatting together. Since both of us have moved
          on to new jobs our weekly chats have moved to the evening and are a
          highlight to my week every week. I was super glad she accepted to be a
          bridesmaid at the wedding.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/wiebke-min.png",
          width: 1280,
          height: 962,
        }}
      >
        <h1>Bridesmaid - Wiebke Busch</h1>
        <p>
          Wiebke and I met properly for the first time when Ryan and I went on
          our holiday to Europe. Albie and Wiebke joined us in Rome and we
          explored the city and sights together. Weibke and I became fast
          friends in all the fun we had touring together and buying matching
          hats from a street vendor in Rome.
        </p>
        <p>
          Through lockdown the four of us spent many hours playing all sorts of
          online games, chatting and having such a social time even though we
          were constricted to staying at our homes.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/albie-min.png",
          width: 1280,
          height: 1185,
        }}
        flipped={true}
      >
        <h1>Best Man - Albie Burger</h1>
        <p>
          Albie and Ryan studied together at Stellenbosch University, they both
          played the online game of Battlefield that gave the common ground off
          of which a friendship was formed that has lasted many years. After his
          masters Albie moved to Germany but Ryan and Albie continued playing
          online games, staying in close contact with each other. A day does not
          go by that Albie and Ryan do not chat with each other. Before COVID
          Albie would regularly come out to South Africa to visit his parents
          and at the same time make plans to visit Ryan. When Ryan and I went on
          holiday to Europe we in turn made plans with him and Wiebke.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/chris.jpg",
          width: 747,
          height: 800,
        }}
      >
        <h1>Groomsman - Chris Cichiwskyj</h1>
        <p>
          Chris was introduced to Ryan by Albie while they were playing their
          online games. Chris is the resident Mexican for Albie and
          Wiebke&apos;s group of friends in Germany. I would always know when
          Chris was joining in the games they were playing as I could hear Ryan
          laughing significantly more than he normally would. Both Ryan and
          Chris would play games until late at night giving them the time to
          talk about anything and everything.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/christine-min.png",
          width: 1280,
          height: 962,
        }}
        flipped={true}
      >
        <h1>Groomsman - Kyle van der Merwe</h1>
        <p>
          Kyle and Ryan also studied together at Stellenbosch University but
          lost communication after studies and their paths went in separate
          directions. When Ryan and I started dating it was a happy coincidence
          that my best friend was married to a friend Ryan had from university.
          We regularly spend time together like with the sunset concerts in the
          picture and lately we love visiting them to also see how their
          daughter Elena has grown between our visits.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/smith_family-min.png",
          width: 1280,
          height: 960,
        }}
      >
        <h1>THE SMITH CLAN</h1>
        <p>
          I come from a family of four that has grown over the years to include
          Anouk, Ewan, Sophie and now will be adding Ryan. My father comes from
          Scotland and with it I grew up with a lot of Scottish heritage. My Dad
          moved to South Africa, met my mother as part of a Scottish country
          dancing club. This year they have been married for 38 years
        </p>
        <p>
          The Smith clan is my father Christie and mother Joy. My brother James
          who will be our MC and his wife Anouk. My nephew Ewan and niece Sophie
          make up the latest members of the Smith clan.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/maggott_family-min.jpg",
          width: 1280,
          height: 960,
        }}
        flipped={true}
      >
        <h1>THE MAGGOTT BUNCH</h1>
        <p>
          Ryan comes from a family of four with his mother Lindy, father Shaun
          and sister Stacey. I will be the first addition to the Maggott family.
          They are a very close-knit family and enjoy having great braais and
          potjies together as a family.
        </p>
        <p>
          Ryan is their facilitator helping them get things done. Particularly
          with anything digital like the setting up or fixing of their internet,
          programming remotes and such like things.
        </p>
      </Profile>
    </FullWidth>
  </Layout>
);

export default WeddingParty;
