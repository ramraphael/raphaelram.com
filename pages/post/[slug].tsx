import { Fragment } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import {
  getPostBySlug,
  getAllPosts,
  getNextAndPreviousPost,
} from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { PostTitleAndDate } from "../../components/PostTitleAndDate";
import { NextPage } from "next";
import { NextAndPreviousPost } from "../../components/NextAndPreviousPost";
import { TwitterShareButton } from "react-share";
import { SiTwitter } from "react-icons/si";
import { getBaseUrl } from "../../config/getBaseUrl";

type Props = {
  post: PostType;
  nextPost: { title: string; slug: string };
  previousPost: { title: string; slug: string };
};

const Post: NextPage<Props> = ({ post, nextPost, previousPost }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Fragment>
      {router.isFallback ? (
        <PostTitleAndDate title="Loading..." />
      ) : (
        <article className="">
          <Head>
            <title>{post.title}</title>

            {/* Meta tags for Facebook */}
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:image" content={post.coverImage} />
            <meta
              property="og:url"
              content={`https://www.raphaelram.com/posts/${post.slug}`}
            />

            {/* Meta tags for Twitter */}
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={post.description} />
            <meta name="twitter:image" content={post.coverImage} />
            <meta name="twitter:card" content="summary" />
          </Head>

          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />

          <PostBody className="mb-14" content={post.content} />

          <TwitterShareButton
            title={post.title}
            url={`${getBaseUrl()}${router.asPath}`}
            className="flex items-center mb-20 hover:opacity-80"
          >
            <SiTwitter className="mr-4 fill-[#1DA1F2]" />
            <span className="uppercase tracking-wider text-[#1a8acf] font-bold opacity-80">
              Share on Twitter
            </span>
          </TwitterShareButton>

          <hr className="mb-14" />

          <NextAndPreviousPost
            previousPost={previousPost}
            nextPost={nextPost}
          />
        </article>
      )}
    </Fragment>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "coverImage",
    "description",
  ]);

  const content = await markdownToHtml(post.content || "");

  // TODO const fetch next and previous post summary, date and title
  const { nextPost, previousPost } = getNextAndPreviousPost(params.slug, [
    "title",
    "slug",
  ]);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      nextPost,
      previousPost,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
