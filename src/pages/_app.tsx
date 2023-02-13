import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { pwaTrackingListeners } from "@/pwaEventlisteners";

const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  pwaTrackingListeners();
}

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     const registInit = async () => {
  //       const registration = await navigator.serviceWorker.register(
  //         "/service-worker.js"
  //       );
  //       registration.waiting?.postMessage("SKIP_WAITING");
  //     };
  //     registInit();
  //   }
  // });
  return <Component {...pageProps} />;
}

if (isBrowser && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered");
      })
      .catch((err) => {
        console.log("Service worker registration failed", err);
      });
  });
}
