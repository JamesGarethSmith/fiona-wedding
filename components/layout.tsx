import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
