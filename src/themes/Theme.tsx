import { ConfigProvider } from 'antd';
import React from 'react';
import '../assets/styles/index.scss';

/**
 * Theme properties.
 */
export interface ThemeProps {
  children: React.ReactNode;
}

/**
 * Theme of Ant Design components.
 */
export const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00d0ff'
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};
