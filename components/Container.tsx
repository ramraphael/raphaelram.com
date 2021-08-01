import { ReactNode, FunctionComponent } from "react";
import cn from "classnames";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Container: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <div
      className={cn("container", "mx-auto", "px-10", "max-w-3xl", className)}
    >
      {children}
    </div>
  );
};

export default Container;
