import Hero from "../components/hero";
import Layout from "../components/layout";
import FullWidth from "../components/full-width";
import Profile from "../components/profile";

const Directions = () => (
  <Layout>
    <Hero section="story">
      <h1>Our Love Story</h1>
    </Hero>
    <FullWidth>
      <h2>How We Met</h2>
      <p>
        After moving to Somerset West I missed being part of a church community
        so decided to try going to Coronation Avenue Methodist church. In the
        services that I joined I heard them talking of opening a Bible study
        group for young adults and decided to go to get to know some people in
        the church better.
      </p>
      <p>
        When I joined the group two of the lovely people I met were Ryan and
        Stacey. After one of the sessions Ryan messaged to let me know that one
        of my car’s brake lights was not working and offered to help me change
        the bulb. Through the process we found out that we both lived in the
        same complex in Somerset West. We started meeting up for coffee after
        work and soon after started dating.
      </p>
      <p>
        We have been dating for over four years now with some exciting
        adventures along the way of traveling to Europe together. Moving to
        Pinelands and then going into COVID lockdown with both of us working
        from home. We are both excited with the future to come and loving the
        moment we are in.
      </p>
      <h2>The proposal</h2>
      <Profile
        image={{
          url: "/images/profile/proposal_3.png",
          width: 1280,
          height: 960,
        }}
      >
        <p>
          It was a Saturday afternoon and Ryan asked for us to play the Harry
          Potter Hogwarts Battle expansion game that I had been gifted for my
          birthday from my brother, Anouk and Ewan. He was a little more
          insistent than normal about playing the board game but I did not not
          really think too much more about it.
        </p>
      </Profile>
      <Profile
        image={{
          url: "/images/profile/proposal_1.png",
          width: 1280,
          height: 960,
        }}
        flipped={true}
      >
        <p>
          We were setting up the game and I was to play with the new character,
          Luna, that was added in the expansion of the game. I commented that
          cards that I was playing with felt odd in comparison to the other
          playing cards. Again I did not think much of it past commenting that
          the cards were quite different to the base game.
        </p>
      </Profile>

      <p>
        We started playing the game and one of my cards, the ‘Spectrespecs’ had
        the instructions to ‘Choose another player to search for an item from
        the Hogwarts Cards library. That card is played immediately.’ Ryan as
        the only other player playing was the player that got to go through the
        Hogwarts card library. He found the card called “Unbreakable Vow” with
        the instructions of “Choose another player to receive the Artifact of
        Commitment. Anything that happens to either player is evenly distributed
        between you and that plater.” Ryan asked me if there was an extra item
        in one of the boxes that we did not unpack and proceeded to go to one of
        the boxes that the game cards had been in.
      </p>
      <Profile
        image={{
          url: "/images/profile/proposal_2.png",
          width: 1280,
          height: 960,
        }}
      >
        <p>
          From the box Ryan pulled out the velvet bag and out of that the
          engagement ring. He went down on one knee and asked if I would marry
          him to which I said yes. The massive grin over my face that started
          then has kept coming back since and throughout this exciting process
          of planning the wedding.
        </p>
      </Profile>
      <p>
        The back story to the proposal is that Ryan spent hours designing,
        planning and putting together the special cards that were swapped into
        the deck of the Luna cards from the expansion. He organised for all the
        Luna cards to be printed so that the special cards were ready for when
        we would sit down to play the expansion game.
      </p>
    </FullWidth>
  </Layout>
);

export default Directions;
