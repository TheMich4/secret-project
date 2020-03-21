// @flow

import './style.css';

import { Card } from '../../../common';
import Game from '../Game';
import React from 'react';

const GameHistory = () => {
  return (
    <Card>
      <div className="GameHistory">
        <Game isWin />
        <Game />
        <Game />
        <Game isWin />
        <Game />
      </div>
    </Card>
  );
};

export default GameHistory;
