import * as React from 'react';
import Head from 'next/head'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


interface ILayoutProps {
  title: string;

  [prop: string]: any
}

const Layout: React.FC<ILayoutProps> = (
  {
    title,
    children,
  }
) => {

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={'main'}>
        <Header
        />
        {children}
      </main>
      <Footer
      />
    </React.Fragment>
  );
};

export default Layout;
