import Menu from "./menu";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Menu />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
