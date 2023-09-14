// import packages below
import React, { ReactNode } from 'react';

// import components below
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
