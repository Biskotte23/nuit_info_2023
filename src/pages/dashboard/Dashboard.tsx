import './Dashboard.scss';
import Header from './header/Header';
import Map from './map/Map';
import UserProfile from './user/UserSection';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Map />
        <UserProfile />
      </div>
    </div>
  );
}
