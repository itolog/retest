import React, { memo } from 'react';

import './layout.scss';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../shared/components/ErrorBoundary/ErrorBoundary';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = memo(({ children }) => {
  return (
    <div className='layout'>
      <ErrorBoundary>
        <main className='centred main'>{children}</main>
      </ErrorBoundary>
      <Footer />
    </div>
  );
});

export default Layout;
