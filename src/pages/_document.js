import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Loading External Script dependencies */}
        <Script
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
          // src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.3.1/swiper-bundle.min.js"
          // src="/lib/swiper/swiper-bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
