// @flow

import './style.css';

import { ChampionIcon, SummonerSpellIcon } from '../../../common';

import ChampionsList from './ChampionsList';
import ItemsList from './ItemsList';
import React from 'react';
import classnames from 'classnames';

type Props = {
  isWin?: boolean,
};

const Game = ({ isWin = false }: Props) => {
  return (
    <div className={classnames('Game', isWin ? 'Game-win' : 'Game-loss')}>
      <div className="Game-ChampionInfo">
        <ChampionIcon champion="Xayah" size="90" />

        <div className="Game-SummonnerSpells">
          <SummonerSpellIcon size="30" spell="Flash" />
          <SummonerSpellIcon size="30" spell="Heal" />
        </div>
      </div>

      <div className="Game-Stats">10/0/2</div>

      <ItemsList />

      <ChampionsList usersChampion="Xayah" />
    </div>
  );
};

export default Game;
