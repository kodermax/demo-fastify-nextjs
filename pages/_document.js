import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { req } = ctx;
    console.log("getInitialProps", req);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    let scriptEl;
    if (this.props.locale) {
      scriptEl = (
        <script
          nonce={this.props.nonce}
          dangerouslySetInnerHTML={{
            __html: `window.LOCALE="${this.props.locale}"`,
          }}
        ></script>
      );
    }

    return (
      <Html>
        <Head />
        <body>
          {scriptEl}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
