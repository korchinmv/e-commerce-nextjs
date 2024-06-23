import { TChildren } from "@/types/Children";
import styles from "./Container.module.scss";

const Container = ({ children }: TChildren) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
