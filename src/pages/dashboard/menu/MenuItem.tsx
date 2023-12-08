import './MenuItem.scss';

interface MenuItemProps {
  label: string;
  image: string;
}

export default function MenuItem({ label, image }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div
        className="menu-item__background"
        style={{ backgroundImage: `url(/assets/images/themes/${image})` }}
      ></div>
      <div className="menu-item__title">{label}</div>
    </div>
  );
}
