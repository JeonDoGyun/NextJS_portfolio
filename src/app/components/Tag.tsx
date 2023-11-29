"use client";

import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-block px-2 py-1 text-lg font-bold border-white text-center border-2 rounded-md hover:text-yellow-500 hover:border-yellow-500">
      {children}
    </span>
  );
};

export default Tag;
