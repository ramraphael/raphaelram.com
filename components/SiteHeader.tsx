import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export const SiteHeader: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div
      role="link"
      onClick={() => router.push("/")}
      className="cursor-pointer group text-gray-700 hover:opacity-80"
    >
      <h1 className="text-6xl font-bold mb-4">
        <span className="text-red-700 group-hover:text-shadow-md">Raphael</span>{" "}
        Ram
      </h1>

      <h2 className="text-3xl mb-16">
        <span className="text-red-700">writes</span> poetry, prose, and{" "}
        <span className="text-red-700">code</span>.
      </h2>
    </div>
  );
};
