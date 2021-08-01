import React, { Fragment } from "react";
import { DateFormatter } from "./DateFormatter";

interface PostTitleAndDateProps {
  title: string;
  date?: string;
}

export const PostTitleAndDate: React.FC<PostTitleAndDateProps> = ({
  title,
  date,
}) => {
  return (
    <Fragment>
      <h1 className="text-3xl text-gray-700 font-serif font-semibold mb-4 text-left">
        {title}
      </h1>

      {date && (
        <DateFormatter
          className="block text-sm uppercase mb-8 text-gray-700"
          dateString={date}
        />
      )}
    </Fragment>
  );
};
