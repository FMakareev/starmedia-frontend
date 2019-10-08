import * as React from "react";
// @ts-ignore
import { lngFromReq } from 'next-i18next/dist/commonjs/utils';

import Document, {Head,Html, Main, NextScript} from 'next/document'

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
    console.log("this.props.lng: ", this.props.lng);
    return (
      <Html lang={this.props.lng || 'ru'}>
        <Head
          title={''}
        />
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
