import { Fragment } from "react";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import { DateFormatter } from "../components/DateFormatter";
import { useRouter } from "next/router";
import Link from "next/link";
import { Chip } from "../components/Chip";
import { Category } from "../types/categories";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>Raphael Ram</title>
      </Head>

      {/* <div className="flex mb-8">
        <Chip text={Category.poetry} />
      </div> */}

      {allPosts.map(({ title, slug, date, description }) => (
        <Link href={`/post/${slug}`} key={slug}>
          <a className="block group cursor-pointer hover:opacity-80 hover:border-l-4 hover:pl-4 transition-spacing duration-200 text-gray-700 mb-12 last:mb-0">
            <h1 className="text-2xl font-semibold font-serif mb-3 group-hover:text-red-700 transition duration-200">
              {title}
            </h1>

            <DateFormatter
              className="block text-sm uppercase mb-1 text-gray-700"
              dateString={date}
            />

            <h2>{description}</h2>
          </a>
        </Link>
      ))}
    </Fragment>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug", "date", "description"]);

  return {
    props: { allPosts },
  };
};
