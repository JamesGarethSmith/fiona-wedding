import classnames from "classnames";

import Spacer from "../spacer";

import styles from "./hero.module.scss";

interface HeroProps {
  section: string;
  children: React.ReactNode;
}

const Hero = ({ section, children }: HeroProps) => (
  <div className={classnames(styles.hero, styles[section])}>
    <div className={styles.content}>
      {children}
      <Spacer section={section} />
    </div>
  </div>
);

export default Hero;
