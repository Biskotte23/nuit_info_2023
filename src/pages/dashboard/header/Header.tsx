import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './Header.scss';

interface HeaderProps {
  onDisplayLanding: () => void;
  onLeafClick: () => void;
}

export default function Header({ onDisplayLanding, onLeafClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-content__title">
          Green Quest{' '}
          <i className="header-content__icon fa-solid fa-leaf" onClick={onLeafClick}></i>
        </h1>

        <Button
          type="primary"
          shape="circle"
          icon={<InfoCircleOutlined />}
          size="large"
          onClick={onDisplayLanding}
        />
      </div>
    </header>
  );
}
