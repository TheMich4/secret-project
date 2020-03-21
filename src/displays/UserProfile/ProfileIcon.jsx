// @flow

import './style.css';

import React from 'react';

type Props = {
  id: string,
  size: string,
};

const ProfileIcon = ({ id, size }: Props) => {
  const profileIcon = `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/profileicon/${id}.png`;

  return <img alt="" className="UserProfile-Icon" height={size} src={profileIcon} width={size} />;
};

export default ProfileIcon;
