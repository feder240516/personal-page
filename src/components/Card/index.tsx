import React from 'react';
import './style.scss';

export type CardProps = React.PropsWithChildren<{}>;

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
