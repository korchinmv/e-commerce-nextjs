import { TChildren } from "@/types/Children";
import styles from "./Main.module.scss";

const Main = ({ children }: TChildren) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
