import { Children } from "@/types/Children";
import styles from "./Main.module.scss";

const Main = ({ children }: Children) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
