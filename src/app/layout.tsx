import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rafy & Rania – Wedding 2026",
  description: "Save the date",
  openGraph: {
    title: "Rafy & Rania – Wedding 2026",
    description: "Save the date",
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
