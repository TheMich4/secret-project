// @flow

import '../style.css';

import { ChampionIcon } from '../../../../common';
import React from 'react';
import classnames from 'classnames';

type Props = {
  usersChampion: string,
};

const teams = [
  ['Ornn', 'Gragas', 'Cassiopeia', 'Ezreal', 'Sett'],
  ['Vladimir', 'LeeSin', 'Viktor', 'Xayah', 'Rakan'],
];

const ChampionsList = ({ usersChampion }: Props) => {
  const renderTeams = (teams: Array<Array<string>>) => teams.map(team => renderTeam(team));

  const renderTeam = (team: Array<string>) => (
    <div className="ChampionsList-Team">{team.map(champion => renderChampion(champion))}</div>
  );

  const renderChampion = (champion: string) => (
    <ChampionIcon
      champion={champion}
      className={classnames(
        'ChampionList-Champion',
        usersChampion === champion && 'ChampionList-Champion--current',
      )}
      size="30"
    />
  );

  return <div className="ChampionsList">{renderTeams(teams)}</div>;
};

export default ChampionsList;
