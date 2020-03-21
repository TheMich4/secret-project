// @flow

import React from 'react';

const src = 'http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/SummonerHeal.png';

type Props = {
  size: string,
  spell: string,
};

const SummonerSpellIcon = ({ size, spell }: Props) => {
  const icon = `http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/Summoner${spell}.png`;

  return (
    <div className="SummonnerSpellIcon">
      <img alt="" height={size} src={icon} width={size} />
    </div>
  );
};

export default SummonerSpellIcon;
