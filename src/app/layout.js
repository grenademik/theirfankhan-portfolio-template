import { Poppins } from 'next/font/google';
import "./globals.css";
import { FloatingNavDemo } from "../components/FloatingNavDemo";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Irfan Khan — Frontend Engineer",
  description:
    "Frontend engineer in Japan. React / Next.js products, dashboards, and browser tools. Portfolio: theirfankhan.com · GitHub: github.com/grenademik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {/* <FloatingNavDemo/> */}
        {children}
        </body>
        <GoogleAnalytics gaId="G-K380SC2EZB" />
    </html>
  );
}
