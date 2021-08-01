import { useRouter } from "next/router";
import { FunctionComponent, Fragment } from "react";
import cn from "classnames";

export const SiteHeader: FunctionComponent = () => {
  const router = useRouter();

  const isHome = router.pathname === "/";

  return (
    <Fragment>
      <div
        role="link"
        onClick={() => router.push("/")}
        className="cursor-pointer mb-16 group text-gray-700 hover:opacity-80 transition-opacity duration-200"
        style={{ width: "fit-content" }}
      >
        <h1
          className={cn(
            { "text-6xl": isHome },
            { "text-4xl": !isHome },
            "font-bold",
            "mb-4"
          )}
        >
          <span className="text-red-700">Raphael</span> Ram{" "}
          {!isHome && "writes"}
        </h1>

        {isHome && (
          <h2 className="text-3xl">
            <span className="text-red-700">writes</span> poetry, prose, and{" "}
            <span className="text-red-700">code</span>.
          </h2>
        )}
      </div>
      <hr className="mb-14" />
    </Fragment>
  );
};
