import localFont from "next/font/local";

// styles
// import "@fortawesome/fontawesome-free/css/all.css";
import "@/assets/styles/bootstrap.css";
import "@/assets/styles/vb.header.footer.css";
import "@/assets/styles/vb.style.css";
import "@/assets/styles/vb.responsive.css";
// Lib Styles
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
// import "react-loading-skeleton/dist/skeleton.css";
import "@/assets/styles/skeletons.css";

// Fonts
const pacificoRegularFont = localFont({
  src: "../assets/fonts/Pacifico-Regular.ttf",
});

// font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-style-400: ${pacificoRegularFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
