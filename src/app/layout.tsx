import Footer from "@/common/layouts/Footer";
import Header from "@/common/layouts/header";
import "./globals.css";
import { ReactQueryProvider } from "@/api/client/reactQuery";
import { CustomToaster } from "@/ui/CustomToaster";

export const metadata = {
  title: "PataMansa",
  icons: {
    icon: "/favicon.png",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative ">
        <ReactQueryProvider>
          <Header />
          <CustomToaster />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
