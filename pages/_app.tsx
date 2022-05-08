import "../styles/reset.css";
import "../public/fonts/fonts.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
