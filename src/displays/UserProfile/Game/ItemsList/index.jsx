// @flow

import '../style.css';

import { ItemIcon } from '../../../../common';
import React from 'react';

const items1 = ['1001', '1004', '1006'];
const items2 = ['1011', '1018', '1026'];

const ItemsList = () => {
  const renderItemRow = (items: Array<string>) => (
    <div className="ItemsList-Row">{items.map(itemId => renderItemIcon(itemId))}</div>
  );

  const renderItemIcon = (itemId: string) => <ItemIcon itemId={itemId} size="25" />;

  return (
    <div className="ItemsList">
      {renderItemRow(items1)}
      {renderItemRow(items2)}
    </div>
  );
};

export default ItemsList;
