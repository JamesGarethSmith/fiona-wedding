import Link from "next/link";
import styles from "./card.module.scss";

interface CardProps {
  title: string;
  description: string;
  url: string;
}

const Card = ({ title, description, url }: CardProps) => (
  <div className={styles.card}>
    <div>
      <h2>{title}</h2>
      <Link href={url}>{description}</Link>
    </div>
  </div>
);

export default Card;
