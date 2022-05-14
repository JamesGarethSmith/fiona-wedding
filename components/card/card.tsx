import classNames from "classnames";

import Link from "next/link";
import styles from "./card.module.scss";

interface CardProps {
  title: string;
  url: string;
  bg?: string;
}

const Card = ({ title, url, bg = "wreath" }: CardProps) => (
  <Link href={url}>
    <div className={classNames(styles.card, styles[bg])}>
      <div>
        <Link href={url}>{title}</Link>
      </div>
    </div>
  </Link>
);

export default Card;
