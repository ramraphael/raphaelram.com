import markdownStyles from "../styles/markdown-styles.module.css";
import cn from "classnames";

type Props = {
  content: string;
  className?: string;
};

const PostBody = ({ content, className }: Props) => {
  return (
    <div className={cn("mx-auto", "text-gray-700", className)}>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
