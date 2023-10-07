import styles from "./UserStatInfo.module.scss";

interface UserStatInfoProps {
  title: string;
  number: number;
}

export const UserStatInfo = ({ title, number }: UserStatInfoProps) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoNumber}>{number}</div>
    </div>
  );
};
