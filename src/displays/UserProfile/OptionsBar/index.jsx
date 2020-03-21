// @flow

import '../style.css';

import { Button, Card } from '../../../common';

import React from 'react';
import { connect } from 'react-redux';
import { showLiveGame } from '../../../actions';

type Props = {
  showLiveGame: () => void,
};

const OptionsBar = ({ showLiveGame }: Props) => (
  <Card>
    <Button label="LiveGame" onClick={showLiveGame} />
    <Button label="Refresh" />
  </Card>
);

const mapDispatchToProps = dispatch => ({
  showLiveGame: () => dispatch(showLiveGame()),
});

export default connect(null, mapDispatchToProps)(OptionsBar);
