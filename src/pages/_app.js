import localFont from "next/font/local";
import Head from "next/head";

// Fonts
const pacificoRegularFont = localFont({
  src: "../assets/fonts/Pacifico-Regular.ttf",
});

//=======================>> styles <<===========================\\
// React Date Range
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Swiper
import "swiper/swiper-bundle.css";

import "@/assets/styles/bootstrap.css";
import "@/assets/styles/vb.header.footer.css";
import "@/assets/styles/skeletons-loading.css";
import "@/assets/styles/vb.style.css";
import "@/assets/styles/vb.responsive.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <style jsx global>{`
        :root {
          --font-style-400: ${pacificoRegularFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
