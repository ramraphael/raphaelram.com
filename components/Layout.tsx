import { Fragment } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Meta from "./Meta";
import { useRouter } from "next/router";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const router = useRouter();

  return (
    <Fragment>
      <Container>
        <Meta />
        <div className="min-h-screen">
          <main>
            <div
              role="link"
              onClick={() => router.push("/")}
              className="cursor-pointer group text-gray-700"
            >
              <h1 className="text-6xl font-bold mt-14 mb-4">
                <span className="text-red-700 group-hover:text-shadow-md">
                  Raphael
                </span>{" "}
                Ram
              </h1>

              <h2 className="text-3xl mb-16">
                <span className="text-red-700">writes</span> poetry, prose, and{" "}
                <span className="text-red-700">code</span>.
              </h2>
            </div>
            {children}
          </main>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
