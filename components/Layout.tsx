import Container from "./Container";
import Footer from "./Footer";
import Meta from "./Meta";
import { SiteHeader } from "./SiteHeader";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Container className="mb-auto py-20">
        <Meta />
        <div>
          <main>
            <SiteHeader />
            {children}
          </main>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
