// @flow

import '../style.css';

import React from 'react';

type Props = {
  label: string,
  onClick: Function,
};

const OptionButton = ({ onClick, label }: Props) => (
  <div className="OptionButton" onClick={onClick}>
    {label}
  </div>
);

export default OptionButton;
