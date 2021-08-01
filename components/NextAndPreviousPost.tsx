import { FunctionComponent, Fragment } from "react";
import cn from "classnames";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Link from "next/link";

interface NextAndPreviousPostProps {
  nextPost: { title: string; slug: string };
  previousPost: { title: string; slug: string };
  className?: string;
}

export const NextAndPreviousPost: FunctionComponent<NextAndPreviousPostProps> =
  ({ nextPost, previousPost, className }) => {
    return (
      <div className={cn("flex", "text-gray-700", className)}>
        <div className="flex items-center mr-auto">
          {previousPost && (
            <Link href={`/post/${previousPost.slug}`}>
              <a className="group flex items-center hover:opacity-80 transition-color transition-opacity duration-200">
                <FaAngleLeft className="group-hover:fill-red mr-4 w-5 h-5" />
                <div className="flex flex-col group-hover:text-red-700">
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 group-hover:text-red-700 font-bold">
                    Previous post:
                  </h3>
                  <p className="">{previousPost.title}</p>
                </div>
              </a>
            </Link>
          )}
        </div>
        <div>
          {nextPost && (
            <Link href={`/post/${nextPost.slug}`}>
              <a className="group flex items-center hover:opacity-80 transition-color transition-opacity duration-200">
                <div className="flex flex-col group-hover:text-red-700">
                  <h3 className=" text-sm uppercase self-end tracking-wide text-gray-600 group-hover:text-red-700 font-bold">
                    Next post:
                  </h3>
                  <p className="">{nextPost.title}</p>
                </div>
                <FaAngleRight className="group-hover:fill-red ml-4 w-5 h-5" />
              </a>
            </Link>
          )}
        </div>
      </div>
    );
  };
