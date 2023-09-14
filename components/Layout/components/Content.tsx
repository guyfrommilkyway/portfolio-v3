// import packages below
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content: React.FC<Props> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Content;
