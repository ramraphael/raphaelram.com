import { FunctionComponent, Fragment } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import Link from "next/link";

export const SiteHeader: FunctionComponent = () => {
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  return (
    <Fragment>
      <Link href="/">
        <a
          className="block cursor-pointer mb-12 group text-gray-700 hover:opacity-80 transition-opacity duration-200"
          style={{ width: "fit-content" }}
        >
          <h1
            className={cn(
              { "text-4xl": isHomePage },
              { "md:text-6xl": isHomePage },
              { "text-3xl": !isHomePage },
              { "md:text-5xl": !isHomePage },
              "font-bold",
              "mb-4"
            )}
          >
            <span className="text-red-700">Raphael</span> Ram{" "}
            {!isHomePage && "writes"}
          </h1>

          {isHomePage && (
            <h2 className="text-xl md:text-3xl">
              <span className="text-red-700">writes</span> poetry, prose, and{" "}
              <span className="text-red-700">code</span>.
            </h2>
          )}
        </a>
      </Link>
      <hr className="mb-12" />
    </Fragment>
  );
};
