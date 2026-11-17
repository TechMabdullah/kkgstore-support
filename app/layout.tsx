import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error Next.js resolves global CSS imports during bundling.
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKG-Store Support - Human-friendly AI",
  description:
    "Instantly resolve customer questions with an assistant that reads your docs and speaks with empathy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#050509] min-h-screen flex flex-col p-0 antialiased text-zinc-100 selection:bg-zinc-800 font-sans`}
      >
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
          <div className="w-full h-full opacity-20">
            <div
              data-us-project="NMlvqnkICwYYJ6lYb064"
              data-us-dpi="1"
              data-us-scale=".75"
              data-us-fps="60"
              data-us-lazyload="true"
              className="absolute w-full h-full left-0 top-0"
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-[#050509] via-transparent to-transparent opacity-80" />
        </div>

        {children}

        <Script
          id="unicorn-studio"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(){
      console.log("[Unicorn] Script tag executed");
      if(!window.UnicornStudio){
        window.UnicornStudio={isInitialized:!1};
        var i=document.createElement("script");
        i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload=function(){
          console.log("[Unicorn] CDN reachable & script loaded!");
          var el = document.querySelector('[data-us-project]');
          console.log("[Unicorn] Target div:", el, "Size:", el?.getBoundingClientRect());
          if(!window.UnicornStudio.isInitialized){
            UnicornStudio.init({ dpi: 1, scale: 0.4, fps: 20 })
              .then(function(scenes){ console.log("[Unicorn] Init success:", scenes); })
              .catch(function(err){ console.error("[Unicorn] Init error:", err); });
            window.UnicornStudio.isInitialized=!0;
          }
        };
        i.onerror=function(e){
          console.error("[Unicorn] Failed to reach jsDelivr CDN:", e);
        };
        (document.head || document.body).appendChild(i);
      }
    }();`,
          }}
        />
      </body>
    </html>
  );
}
