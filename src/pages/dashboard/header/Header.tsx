import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './Header.scss';

interface HeaderProps {
  onDisplayLanding: () => void;
}

export default function Header({ onDisplayLanding }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-content__title">
          Green Quest <i className="header-content__icon fa-solid fa-leaf"></i>
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
