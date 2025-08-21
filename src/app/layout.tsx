import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  // Sæt dit rigtige domæne her (uden trailing slash)
  metadataBase: new URL("https://rafy-rania.dk/"),
  title: "Rafy & Rania – Wedding 2026",
  description: "Save the date",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Rafy & Rania – Wedding 2026",
    title: "Rafy & Rania – Wedding 2026",
    description: "Save the date",
    images: [
      {
        url: "/og.jpeg", // bliver til https://dit-domæne.dk/og.jpg via metadataBase
        width: 1200,
        height: 630,
        alt: "Rafy & Rania — 01.08.2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafy & Rania – Wedding 2026",
    description: "Save the date",
    images: ["/og.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WLdbrC"
          strategy="afterInteractive"
          async
        />
        <Script id="klaviyo-init" strategy="afterInteractive">
          {`
    !function(){
      if(!window.klaviyo){
        window._klOnsite=window._klOnsite||[];
        try{
          window.klaviyo=new Proxy({},{
            get:function(n,i){
              return "push"===i
                ? function(){
                    var n;
                    (n=window._klOnsite).push.apply(n,arguments)
                  }
                : function(){
                    for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];
                    var t="function"==typeof o[o.length-1]?o.pop():void 0,
                        e=new Promise((function(n){
                          window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))
                        }));
                    return e
                  }
            }
          })
        }catch(n){
          window.klaviyo=window.klaviyo||[],
          window.klaviyo.push=function(){
            var n;(n=window._klOnsite).push.apply(n,arguments)
          }
        }
      }
    }();
  `}
        </Script>

        {/* Main content */}
        <div className="container">
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
