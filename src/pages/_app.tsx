import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registInit = async () => {
        const registration = await navigator.serviceWorker.register(
          "/service-worker.js"
        );
        registration.waiting?.postMessage("SKIP_WAITING");
      };
      registInit();
    }
  });
  return <Component {...pageProps} />;
}
