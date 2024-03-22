// packages
import React from 'react';

const CardUI: React.FC<ICardUI> = props => {
  const { height, children } = props;

  return (
    <div
      className={`w-full bg-neutral-900 rounded-3xl ${height ? height : ''}`}
    >
      {children}
    </div>
  );
};

export default CardUI;
