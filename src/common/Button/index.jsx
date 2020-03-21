// @flow

import './style.css';

import React from 'react';

type Props = {
  label: string,
  onClick: Function,
};

const Button = ({ onClick, label }: Props) => (
  <div className="Button" onClick={onClick}>
    {label}
  </div>
);

export default Button;
