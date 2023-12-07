import './Dashboard.scss';
import Header from './header/Header';
import Map from './map/Map';
import UserProfile from './user/UserSection';

export default function Dashboard() {
  function updateProfilePictureIndex(index: number) {
    console.log('New profile picture index', index);
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Map />
        <UserProfile
          currentProfilePictureIndex={0}
          onProfilePictureChange={updateProfilePictureIndex}
        />
      </div>
    </div>
  );
}
