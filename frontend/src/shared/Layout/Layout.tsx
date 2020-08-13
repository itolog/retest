import React from 'react';

import './layout.scss';
import Footer from '../../components/Footer/Footer';

interface Props {
  children: React.ReactNode;
}


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='layout'>
      <main className='centred main'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;