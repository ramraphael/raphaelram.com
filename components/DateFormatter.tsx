import { parseISO, format } from "date-fns";

type Props = {
  className?: string;
  dateString: string;
};

export const DateFormatter = ({ dateString, className }: Props) => {
  const date = parseISO(dateString);
  return <span className={className}>{format(date, "LLLL	d, yyyy")}</span>;
};
