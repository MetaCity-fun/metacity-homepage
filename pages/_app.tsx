import "../styles/globals.css";
import "../styles/spine-player.css";
import "../styles/styles.scss";
import 'antd/dist/reset.css';

import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        id="stripe-js"
        src="https://www.googletagmanager.com/gtag/js?id=G-J9SY6QHR1Q"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            // @ts-ignore
            dataLayer.push(arguments);
          }
          // @ts-ignore
          gtag("js", new Date());
          // @ts-ignore
          gtag("config", "G-J9SY6QHR1Q");
        }}
        onError={(e) => {
          console.error("Script Google Analytics failed to load", e);
        }}
      />
    </>
  );
}

export default MyApp;
