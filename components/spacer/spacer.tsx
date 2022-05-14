import style from "./spacer.module.scss";

export default ({ section }: { section: string }) => (
  <div className={style[section]} />
);
