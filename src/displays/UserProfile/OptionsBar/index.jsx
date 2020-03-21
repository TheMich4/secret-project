// @flow

import '../style.css';

import { Card } from '../../../common';
import OptionButton from './OptionButton';
import React from 'react';

const OptionsBar = () => (
  <Card>
    <OptionButton label="LiveGame" />
    <OptionButton label="Refresh" />
  </Card>
);

export default OptionsBar;
