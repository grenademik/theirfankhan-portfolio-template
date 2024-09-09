import { Poppins } from 'next/font/google';
import "./globals.css";
import { FloatingNavDemo } from "../components/FloatingNavDemo";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Irfan Khan - Designer/Developer",
  description: "- Designer/Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        
        {/* <FloatingNavDemo/> */}
        {children}
        </body>
    </html>
  );
}
