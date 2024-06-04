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
          src="https://cdn.jsdelivr.net/npm/swiper@11.1.3/swiper-element-bundle.min.js"
          // src="/assets/js/swiper-bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/glightbox/3.3.0/js/glightbox.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/assets/js/wnumb.min.js" strategy="beforeInteractive" />
        <Script
          src="/assets/js/nouislider.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
