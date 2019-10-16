import App from "next/app";
import React from "react";
import {ApolloProvider} from "react-apollo";

import "../style/style.scss";
import "react-id-swiper/lib/styles/css/swiper.css";
import Layout from "../components/Layout/Layout";
import {appWithTranslation} from '../libs/i18n'
import SocialIconsSprite from "../components/Icons/SocialIconsSprite";
import CookiePopup from "../components/CookiePopup/CookiePopup";
import withApollo from "../apollo/withApollo/withApollo";





class RootApp extends App<any> {


  render() {
    const {Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Layout title={''}>
          <SocialIconsSprite/>
          <Component {...pageProps} />
          <CookiePopup/>
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApollo(appWithTranslation(RootApp));
