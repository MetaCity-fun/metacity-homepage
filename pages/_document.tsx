import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

function MyDocument() {
  return (
    <Html prefix="og: http://ogp.me/ns#">
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta
          name="description"
          content="MetaCity is where you can form your own gang, build business in the ideal city. Be an early bird, acquire power, spread your notoriety and make the new world together now."
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemProp="name"
          content="MetaCity - The first IDLE game based on blockchain."
        />
        <meta
          itemProp="description"
          content="MetaCity is where you can form your own gang, build business in the ideal city. Be an early bird, acquire power, spread your notoriety and make the new world together now."
        />
        <meta itemProp="image" content={"/images/cover_01.png"} />
        <meta
          name="keywords"
          content="metacity, metacity.fun, metacity game, metacity mtc, mtc token, mtc tokenomic, mtc whitepaper, metacity nft, metacity pitch deck, metacity ido, idle game, blockchain, game nft, metaverse"
        ></meta>

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:title"
          content="MetaCity - The first IDLE game based on blockchain."
        />
        <meta
          property="og:description"
          content="MetaCity is where you can form your own gang, build business in the ideal city. Be an early bird, acquire power, spread your notoriety and make the new world together now."
        />
        <meta property="og:image" content={"/images/cover_01.png"} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MetaCity - The first IDLE game based on blockchain."
        />
        <meta
          name="twitter:description"
          content="MetaCity is where you can form your own gang, build business in the ideal city. Be an early bird, acquire power, spread your notoriety and make the new world together now."
        />
        <meta name="twitter:image" content={"/images/cover_01.png"} />

        <link rel="icon" href="/favicon.ico" />
        {/*  */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800&family=Share+Tech&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
