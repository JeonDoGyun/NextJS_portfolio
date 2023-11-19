"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  const { theme } = useTheme();
  const hoverColorInfo =
    theme === "dark"
      ? "hover:bg-white hover:text-black"
      : "hover:bg-gray-300 hover:text-white";
  return (
    <span
      className={`inline-block px-2 py-1 text-lg font-bold text-center border-2 rounded-md ${hoverColorInfo}`}
    >
      {children}
    </span>
  );
};

export default Tag;
