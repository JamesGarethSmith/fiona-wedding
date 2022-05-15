import style from "./spacer.module.scss";

const Spacer = ({ section }: { section: string }) => (
  <div className={style[section]} />
);

export default Spacer;
