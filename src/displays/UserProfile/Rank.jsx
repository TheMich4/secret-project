// @flow

import './style.css';

import type { Rank } from './types';
import React from 'react';
import bronze from '../../assets/RankEmblems/Emblem_Bronze.png';
import challenger from '../../assets/RankEmblems/Emblem_Challenger.png';
import diamond from '../../assets/RankEmblems/Emblem_Diamond.png';
import gold from '../../assets/RankEmblems/Emblem_Gold.png';
import grandmaster from '../../assets/RankEmblems/Emblem_Grandmaster.png';
import iron from '../../assets/RankEmblems/Emblem_Iron.png';
import master from '../../assets/RankEmblems/Emblem_Master.png';
import platinum from '../../assets/RankEmblems/Emblem_Platinum.png';
import silver from '../../assets/RankEmblems/Emblem_Silver.png';

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
      <img height={size} src={rankIcon} width={size}></img>
    </div>
  );
};

export default RankInfo;
