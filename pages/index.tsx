import { Fragment } from "react";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import { DateFormatter } from "../components/DateFormatter";
import { useRouter } from "next/router";

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

      {allPosts.map(({ title, slug, date, description }) => (
        <div
          key={slug}
          className="cursor-pointer hover:opacity-80 hover:border-l-4 hover:pl-4 transition-spacing duration-200 text-gray-700 mb-12 last:mb-0"
          role="link"
          onClick={() => router.push(`/post/${slug}`)}
        >
          <h1 className="text-2xl font-semibold font-serif mb-3 group-hover:text-red-700">
            {title}
          </h1>

          <DateFormatter
            className="block text-sm uppercase mb-1 text-gray-700"
            dateString={date}
          />

          <h2>{description}</h2>
        </div>
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
