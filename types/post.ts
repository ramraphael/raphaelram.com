import { Category } from "./categories";

type PostType = {
  slug: string;
  title: string;
  category: Category;
  date: string;
  coverImage: string;
  description: string;
  content: string;
};

export default PostType;
