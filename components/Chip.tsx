import { Category } from "../types/categories";
import { FunctionComponent } from "react";

interface ChipProps {
  text: Category;
}

const categoryToStyles = {
  poetry: "",
  prose: "",
  code: "",
};

export const Chip: FunctionComponent<ChipProps> = ({ text }) => {
  return (
    <div className="cursor-pointer flex items-center justify-center rounded-2xl border border-gray-800 py-0.5 px-3">
      {text.toUpperCase()}
    </div>
  );
};
