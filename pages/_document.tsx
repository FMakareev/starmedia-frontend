import * as React from "react";
// @ts-ignore
import {lngFromReq} from 'next-i18next/dist/commonjs/utils';

import Document, {Head, Html, Main, NextScript} from 'next/document'

interface Props {

  [prop: string]: any;
}


class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const lng = lngFromReq(ctx.req);
    return {
      lng,
      ...initialProps,
    }
  }


  render() {
    return (
      <Html lang={this.props.lng || 'ru'}>
        <Head
          title={''}
        >
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/static/favicon/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
