import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <ul>
        <li>
          <a
            href="https://forms.gle/2xEAJxqXUysFzNxt7"
            target="_blank"
            rel="noreferrer"
          >
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
          <a href="tel:+27713846618">Phone: +2771 384 6618</a>
        </li>
        <li>
          <a href="mailto:fiona.caroline.smith@gmail.com">
            Email: fiona.caroline.smith@gmail.com
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default Footer;
