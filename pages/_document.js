/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript, } from 'next/document' 

export default function Document() {
  return (
    <Html>
      <Head>

        {/* <!-- Meta --> */}
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* <!-- Dark Mode JS --> */}
        <script src="./js/darkMode.bundle.js"></script>

        {/* <!-- Favicons --> */}
        <link rel="shortcut icon" href="img/favicon.ico" />
        <link rel="apple-touch-icon" href="img/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="img/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="img/apple-icon-114x114.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="img/android-icon-192x192.png" />
        <link rel="manifest" href="img/manifest.json" />
      </Head>

      <body className="dark:bg-jacarta-900 font-body text-jacarta-500 overflow-x-hidden" itemScope itemType="http://schema.org/WebPage">
        <Main />
        <NextScript />
        
        {/* <script src="/js/main.js"></script> */}
      </body>
    </Html>
  )
}