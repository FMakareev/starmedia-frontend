import * as React from 'react';
import Head from 'next/head'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {MenuProvider} from "../../libs/MenuProvider";


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

        <MenuProvider>
          <Header
          />
        </MenuProvider>
        {children}
      </main>
      <Footer
      />
    </React.Fragment>
  );
};

export default Layout;
