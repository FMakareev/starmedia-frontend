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
import SearchBySiteProvider from "../libs/SearchBySiteProvider";
import { documentOffsetTop } from "../libs/documentOffsetTop";


documentOffsetTop();


class RootApp extends App<any> {


  render() {
    const {Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <SearchBySiteProvider>
          <Layout title={''}>
            <SocialIconsSprite/>
            <Component {...pageProps} />
            <CookiePopup/>
          </Layout>
        </SearchBySiteProvider>
      </ApolloProvider>
    );
  }
}

export default withApollo(appWithTranslation(RootApp));
