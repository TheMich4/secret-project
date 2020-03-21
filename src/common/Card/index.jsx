// @flow

import './style.css';

import React from 'react';

type Props = {
  children: any,
};

const Card = ({ children }: Props) => <div className="Card">{children}</div>;

export default Card;
