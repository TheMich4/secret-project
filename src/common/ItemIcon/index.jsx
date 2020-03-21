// @flow

import './style.css';

import React from 'react';
import classnames from 'classnames';

type Props = {
  size: string,
  itemId: string,
  className?: string,
};

const ItemIcon = ({ size, itemId, className }: Props) => {
  const itemIcon = `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/item/${itemId}.png`;

  return (
    <img
      alt=""
      className={classnames('ItemIcon', className)}
      height={size}
      src={itemIcon}
      width={size}
    />
  );
};

export default ItemIcon;
