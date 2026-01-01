import React from 'react';
import Email from '@/containers/Email';
import Footer from '@/containers/layout/Footer';
import Navbar from '@/containers/layout/Navbar';
import Social from '@/containers/Social';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
    </>
  );
};

export default Layout;
