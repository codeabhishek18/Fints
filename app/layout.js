import { Poppins } from "next/font/google";
import "./globals.css";
import SchemeWrapper from "./SchemeWrapper";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '600', '700', '800', '900'] });

export const metadata = {
  title: "FINTS - FinCrime Trusted Source | Expert Solutions for Financial Crime Prevention</title>",
  description: "FinCrime Trusted Source",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="keywords" content="financial crime, FinCrime, financial crime prevention, fraud detection, anti-money laundering, financial security, compliance solutions, risk management"/>
      <meta property="og:title" content="FINTS - FinCrime Trusted Source"/>  
      <meta property="og:description" content="FINTS offers expert solutions for financial crime prevention. Explore our resources and insights to combat financial crime effectively."/>
      <meta property="og:image" content="URL_to_your_image"/>
      <meta property="og:url" content="https://www.fintsacademy.com"/>
      <SchemeWrapper>
        <body className={poppins.className}>{children}</body>
      </SchemeWrapper>
    </html>
  );
}
