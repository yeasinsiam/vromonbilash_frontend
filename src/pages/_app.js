import localFont from "next/font/local";

// styles
import "@fortawesome/fontawesome-free/css/all.css";
import "@/assets/styles/bootstrap.css";
import "@/assets/styles/vb.header.footer.css";
import "@/assets/styles/vb.style.css";
import "@/assets/styles/vb.responsive.css";
// Lib Styles
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import "react-daterange-picker/dist/css/react-calendar.css";

// Fonts
const pacificoRegularFont = localFont({
  src: "../assets/fonts/Pacifico-Regular.ttf",
});

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
