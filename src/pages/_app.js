import localFont from "next/font/local";

// styles
import "@fortawesome/fontawesome-free/css/all.css";
import "@/assets/styles/bootstrap.css";
import "@/assets/styles/vb.header.footer.css";
import "@/assets/styles/vb.style.css";
import "@/assets/styles/vb.responsive.css";
// import "@/assets/styles/daterangepicker.css";

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
