import { ReactNode } from "react";

interface BannerProps {
  textSize: string;
  children: ReactNode;
}

const Banner = ({ textSize, children }: BannerProps) => {
  return (
    <div className={`${textSize} text-shadow-lg font-bold shadow-yellow-500`}>
      <h1>{children}</h1>
    </div>
  );
};

export default Banner;
