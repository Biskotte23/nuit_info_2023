import './Dashboard.scss';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserProfile from './user/UserSection';

export default function Dashboard() {
  function updateProfilePictureIndex(index: number) {
    console.log('New profile picture index', index);
  }

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__content">
        <Menu />
        <UserProfile
          currentProfilePictureIndex={0}
          onProfilePictureChange={updateProfilePictureIndex}
        />
      </div>
    </div>
  );
}
