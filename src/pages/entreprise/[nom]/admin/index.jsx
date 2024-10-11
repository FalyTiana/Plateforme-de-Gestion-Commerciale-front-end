import styles from './Admin.module.css'
import Header from "../../../../component/entreprise/header";
import Insights from "../../../../component/entreprise/insights";
import RecentOrders from '../../../../component/entreprise/recentOrders';
import RecentReminders from '../../../../component/entreprise/recentRemiders';

function Admin() {
  return (
    <>
      <Header />
      <Insights/>
      <div className={styles.bottomData}>
        <RecentOrders/>
        <RecentReminders/>

      </div>
    </>
  );
}

export default Admin;
