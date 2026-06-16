"use client";

import Script from "next/script";

export default function ThemeScripts() {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/js/custom.js"
        strategy="afterInteractive"
      />
    </>
  );
}