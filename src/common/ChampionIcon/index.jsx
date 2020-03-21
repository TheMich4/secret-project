// @flow

import './style.css';

import React from 'react';
import classnames from 'classnames';

type Props = {
  size: string,
  champion: string,
  className?: string,
};

const ChampionIcon = ({ size, champion, className }: Props) => {
  const championIcon = `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/${champion}.png`;

  return (
    <img
      alt=""
      className={classnames('ChampionIcon', className)}
      height={size}
      src={championIcon}
      width={size}
    />
  );
};

export default ChampionIcon;
