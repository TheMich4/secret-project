// @flow

import './style.css';

import {
  bronze,
  challenger,
  diamond,
  gold,
  grandmaster,
  iron,
  master,
  platinum,
  silver,
} from './rankIcons';

import type { Rank } from './types';
import React from 'react';

type Props = {
  size: string,
  rank: Rank,
};

const getRankIcon = (rank: string) => {
  switch (rank) {
    case 'challenger':
      return challenger;
    case 'grandmaster':
      return grandmaster;
    case 'master':
      return master;
    case 'diamond':
      return diamond;
    case 'platinum':
      return platinum;
    case 'gold':
      return gold;
    case 'silver':
      return silver;
    case 'bronze':
      return bronze;
    default:
      return iron;
  }
};

const RankInfo = ({ size, rank }: Props) => {
  const rankIcon = getRankIcon(rank);

  return (
    <div className="UserProfile-Rank">
      <img alt="" height={size} src={rankIcon} width={size}></img>
    </div>
  );
};

export default RankInfo;
