import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/main";
import Content from "./components/content/dynamic";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DTAILOR AI Tailored documentation for your product",
  description: "AI Tailored documentation for your product",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NavBar />
//         <div className="pt-32">
//           <Sidebar />
//           {children}
//           <Content />
//         </div>
        
        
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {/* <div className="pt-30" style={{display: 'flex', height: '100vh' }}> */}
        <div style={{paddingTop: '6.3rem', display: 'flex', height: '100%',}}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            {/* <Content /> */}
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
