import styles from "./button.module.scss";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
