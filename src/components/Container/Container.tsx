import { Children } from "@/types/Children";
import styles from "./Container.module.scss";

const Container = ({ children }: Children) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
