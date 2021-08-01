import { Container } from "./Container";
import { SiteFooter } from "./SiteFooter";
import { Meta } from "./Meta";
import { SiteHeader } from "./SiteHeader";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Container className="mb-auto pt-20 pb-32">
        <Meta />
        <div>
          <main>
            <SiteHeader />
            {children}
          </main>
        </div>
      </Container>
      <SiteFooter />
    </div>
  );
};

export default Layout;
