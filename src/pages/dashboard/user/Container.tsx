import React from 'react';
import './Container.scss';

interface ContainerProps {
  label: string;
  children: React.ReactElement;
}

export default function Container({ label, children }: ContainerProps) {
  return (
    <div className="container">
      <h3 className="container__title">{label}</h3>
      <div className="container__content">{children}</div>
    </div>
  );
}
