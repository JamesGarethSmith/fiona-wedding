import styles from "./block.module.scss";

interface BlockProps {
  children: React.ReactNode;
}

const Block = ({ children }: BlockProps) => (
  <div className={styles.block}>{children}</div>
);

export default Block;
