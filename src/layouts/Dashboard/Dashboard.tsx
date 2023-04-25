import styles from './Dashboard.module.css';
interface DashboardProps {
  aside: React.ReactNode;
  body: React.ReactNode;
}

const Dashboard = ({ aside, body }: DashboardProps) => {
  return (
    <div className={styles.dashboard}>
      {aside}
      {body}
    </div>
  );
};

export default Dashboard;
