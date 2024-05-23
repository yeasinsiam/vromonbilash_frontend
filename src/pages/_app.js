import localFont from "next/font/local";
import Head from "next/head";

// Fonts
const pacificoRegularFont = localFont({
  src: "../assets/fonts/Pacifico-Regular.ttf",
});

const rubikLightFont = localFont({
  src: "../assets/fonts/Rubik/Rubik-Light.ttf",
});

const rubikRegularFont = localFont({
  src: "../assets/fonts/Rubik/Rubik-Regular.ttf",
});

const rubikMediumFont = localFont({
  src: "../assets/fonts/Rubik/Rubik-Medium.ttf",
});

const rubikSemiBoldFont = localFont({
  src: "../assets/fonts/Rubik/Rubik-SemiBold.ttf",
});

const rubikBoldFont = localFont({
  src: "../assets/fonts/Rubik/Rubik-Bold.ttf",
});

const montserratRegularFont = localFont({
  src: "../assets/fonts/Montserrat/Montserrat-Regular.ttf",
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
// import "swiper/swiper-bundle.css";

import "@/assets/styles/bootstrap.css";
import "@/assets/styles/vb.theme.css";
import "@/assets/styles/skeletons-loading.css";
import "@/assets/styles/vb.header.footer.css";
import "@/assets/styles/vb.style.css";
import "@/assets/styles/vb.responsive.css";
import "@/assets/styles/vb.custom.css";

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
          --h-font-100: ${rubikLightFont.style.fontFamily};
          --h-font-400: ${rubikRegularFont.style.fontFamily};
          --h-font-500: ${rubikMediumFont.style.fontFamily};
          --h-font-600: ${rubikSemiBoldFont.style.fontFamily};
          --h-font-700: ${rubikBoldFont.style.fontFamily};
          --p-font-400: ${montserratRegularFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
