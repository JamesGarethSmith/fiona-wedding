import styles from "./hero.module.scss";

interface HeroProps {
  imgSrc: string;
  children: React.ReactNode;
}

const Hero = ({ imgSrc, children }: HeroProps) => (
  <div
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${imgSrc}");`,
    }}
    className={styles.hero}
  >
    <div className={styles.content}>{children}</div>
  </div>
);

export default Hero;
