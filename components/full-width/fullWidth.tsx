import Block from "../block";
import style from "./fullWidth.module.scss";

interface FullWidthProps {
  children: React.ReactNode;
}

const FullWidth = ({ children }: FullWidthProps) => (
  <Block>
    <div className={style.fullWidth}>{children}</div>
  </Block>
);

export default FullWidth;
