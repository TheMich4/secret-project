// @flow

import './style.css';

import { Button, Card } from '../../common';

import React from 'react';
import { connect } from 'react-redux';
import { hideLiveGame } from '../../actions';

type Props = {
  hideLiveGame: () => void,
};

const LiveGame = ({ hideLiveGame }: Props) => (
  <Card>
    <div className="LiveGame-TopBar">
      <div className="LiveGame-Info">Live Game - Ranked (solo/duo) - Xayah - 15:22</div>
      <Button label="x" onClick={hideLiveGame} />
    </div>
  </Card>
);

const mapDispatchToProps = dispatch => ({
  hideLiveGame: () => dispatch(hideLiveGame()),
});

export default connect(null, mapDispatchToProps)(LiveGame);
