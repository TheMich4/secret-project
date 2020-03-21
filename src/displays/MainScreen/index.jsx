// @flow

import './style.css';

import React from 'react';
import { UserProfile } from '../../displays';
import useWindowDimensions from './useWindowDimensions';

const MainScreen = () => {
  const { width } = useWindowDimensions();

  if (width < 500) {
    return <div>Mobile screens not yet supported!</div>;
  }

  return (
    <div className="MainScreen">
      <UserProfile />
    </div>
  );
};

export default MainScreen;
