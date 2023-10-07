import styles from "./UserStat.module.scss";
import { UserStatInfo } from "components/UserStatInfo";
import { LocalGitHubUser } from "types";

export interface UserStatProps
  extends Pick<LocalGitHubUser, "repos" | "followers" | "following"> {}

export const UserStat = ({ followers, repos, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <UserStatInfo title="Repos" number={repos} />
    <UserStatInfo title="Following" number={following} />
    <UserStatInfo title="Followers" number={followers} />
  </div>
);
