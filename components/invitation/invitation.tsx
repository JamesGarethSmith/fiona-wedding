import Button from "../button";

import styles from "./invitation.module.scss";

const Invitation = () => (
  <div className={styles.wrapper}>
    <p>Together with their parents,</p>
    <h1>Fiona Smith &amp; Ryan Maggott</h1>
    <p>
      with great pleasure invite you to join them at the celebration of their
      marriage.
    </p>
    <ul>
      <li>Saturday the 15th of October 2022, 15:30 for 16:00</li>
      <li>At Webersburg Wine Estate, Stellenbosch</li>
      <li>The reception to follow after at the same venue</li>
      <li>Dress code is semi-formal</li>
    </ul>

    <p>
      Please RSVP by the <b>30th of June 2022.</b>
    </p>

    <Button
      onClick={() =>
        window.open("https://forms.gle/2xEAJxqXUysFzNxt7", "_blank")
      }
    >
      RSVP
    </Button>
  </div>
);

export default Invitation;
