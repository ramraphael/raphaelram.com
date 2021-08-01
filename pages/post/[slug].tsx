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

type Props = {
  post: PostType;
  nextPost: { title: string; date: string; excerpt: string };
  previousPost: { title: string; date: string; excerpt: string };
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
        <article className="mb-32">
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>

          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />

          <PostBody content={post.content} />
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
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  // TODO const fetch next and previous post summary, date and title
  const { nextPost, previousPost } = getNextAndPreviousPost(params.slug, [
    "title",
    "date",
    "excerpt",
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
