import React, { ReactNode } from "react";

interface BannerProps {
  textSize: string;
  children: ReactNode;
}

const Banner = ({ textSize, children }: BannerProps) => {
  return (
    <div className={`${textSize} font-semibold`}>
      <span>{children}</span>
    </div>
  );
};

export default Banner;
