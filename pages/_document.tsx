import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div
          style={{
            backgroundColor: 'black',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            zIndex: '1'
          }}
          id="loading"
        >
          loading
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
