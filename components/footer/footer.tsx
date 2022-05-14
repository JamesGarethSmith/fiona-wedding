import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <ul>
        <li>
          <a href="https://forms.gle/2xEAJxqXUysFzNxt7" target="_blank">
            RSVP
          </a>
        </li>
        <li>
          <Link href="/directions">Directions</Link>
        </li>
        <li>
          <Link href="/accommodation">Accommodation</Link>
        </li>
        <li>
          <Link href="/gift-registries">Gift registries</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Invitation</Link>
        </li>
        <li>
          <Link href="/love-story">Our love story</Link>
        </li>
        <li>
          <Link href="/wedding-party">The wedding party</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="tel:0824844883">Phone</a>
        </li>
        <li>
          <a href="mailto:james.gareth.smith@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  </section>
);

export default Footer;
