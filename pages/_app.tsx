import App from "next/app";
import React from "react";
import "../style/style.scss";
import Layout from "../components/Layout/Layout";
import {appWithTranslation} from '../libs/i18n'
import SocialIconsSprite from "../components/Icons/SocialIconsSprite";
import CookiePopup from "../components/CookiePopup/CookiePopup";

// const cookieParse = require('cookie');

class RootApp extends App<any> {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Layout title={''}>
        <SocialIconsSprite/>
        <Component {...pageProps} />
        <CookiePopup/>
      </Layout>
    );
  }
}

export default appWithTranslation(RootApp);
