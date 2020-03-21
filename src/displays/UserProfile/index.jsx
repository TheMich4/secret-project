// @flow

import './style.css';

import { Card } from '../../common';
import GameHistory from './GameHistory';
import { LiveGame } from '../../displays';
import OptionsBar from './OptionsBar';
import ProfileIcon from './ProfileIcon';
import RankInfo from './RankInfo';
import React from 'react';
import { connect } from 'react-redux';

type Props = {
  profileIconId: ?string,
  name: ?string,
  summonerLevel: ?string,
  isLiveGameVisible: boolean,
};

const UserProfile = ({
  profileIconId = '4405',
  name = 'kocham wojtusia',
  summonerLevel = '250',
  isLiveGameVisible,
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

      {isLiveGameVisible && <LiveGame />}

      <GameHistory />
    </div>
  );
};

const mapStateToProps = state => ({
  isLiveGameVisible: state.isLiveGameVisible,
});

export default connect(mapStateToProps)(UserProfile);
