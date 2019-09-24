import * as React from 'react';
import Head from 'next/head'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Container from "../Container/Container";

interface ILayoutProps {
  title: string;

  [prop: string]: any
}

const Layout: React.FC<ILayoutProps> = ({
                                          title,
                                          children,
                                        }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={'main'}>
        <Header/>
        <Container>
          {children}
        </Container>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
