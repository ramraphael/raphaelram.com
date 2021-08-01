import CoverImage from "./CoverImage";
import { PostTitleAndDate } from "./PostTitleAndDate";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitleAndDate title={title} date={date} />

      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
