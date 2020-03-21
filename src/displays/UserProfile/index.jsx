// @flow

import './style.css';

import { Card } from '../../common';
import GameHistory from './GameHistory';
import OptionsBar from './OptionsBar';
import ProfileIcon from './ProfileIcon';
import RankInfo from './RankInfo';
import React from 'react';

type Props = {
  profileIconId: ?string,
  name: ?string,
  summonerLevel: ?string,
};

const UserProfile = ({
  profileIconId = '4405',
  name = 'kocham wojtusia',
  summonerLevel = '250',
}: Props) => {
  return (
    <div className="UserProfile">
      <Card>
        <ProfileIcon id={profileIconId} size="80" />

        <div className="UserProfile-Details">
          <div className="UserProfile-Name">{name}</div>
          <div className="UserProfile-Level">{`Level: ${summonerLevel}`}</div>
        </div>

        <div className="UserProfile-Ranks">
          <RankInfo rank="challenger" size="80" />
          <RankInfo size="80" />
          <RankInfo rank="gold" size="80" />
        </div>
      </Card>

      <OptionsBar />

      <GameHistory />
    </div>
  );
};

export default UserProfile;
