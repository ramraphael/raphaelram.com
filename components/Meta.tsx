import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

export const Meta = () => {
  return (
    <Head>
      <link
        rel="shortcut icon mask-icon"
        type="image/png"
        href="/favicon/favicon.png"
      />
      <meta name="theme-color" content="#000" />
      <meta name="description" content="Raphael Ram's personal blog." />
      {/* TODO look into this when adding RSS Feed */}
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      {/* TODO add og image here */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  );
};
