import CoverImage from "./CoverImage";
import Author from "../types/author";
import { PostTitleAndDate } from "./PostTitleAndDate";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitleAndDate title={title} date={date} />

      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
