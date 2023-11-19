"use client";

import { useTheme } from "next-themes";
import Banner from "../components/Banner";

const IntroSection = () => {
  const { theme } = useTheme();
  const hoverColorInfo =
    theme !== "dark" ? "bg-yellow-400 text-black" : "bg-yellow-600 text-white";
  return (
    <section className={`h-screen rounded-3xl ${hoverColorInfo}`}>
      <article className="introduction">
        <Banner textSize="text-4xl">안녕하세요!</Banner>
        <Banner textSize="text-2xl">
          Frontend 개발자 전도균의 포트폴리오입니다
        </Banner>
      </article>
      <article className="info">
        <Banner textSize="text-4xl">Info</Banner>
      </article>
      <article className="about-me">
        <div className="grid grid-cols-3 w-[95%] mx-4">
          <div className="text-4xl col-span-1 flex flex-col text-center">
            <Banner textSize="text-4xl">About</Banner>
            <Banner textSize="text-4xl">Me</Banner>
          </div>
          <div className="text-area col-span-2">
            <Banner textSize="text-3xl">
              이러한 개발자가 되기 위해 노력하고 있습니다
            </Banner>
            <div className="border-4 border-gray-400 rounded-md px-4 py-4 my-2">
              <Banner textSize="text-xl">노력하는 개발자</Banner>
              <ul className="list-disc">
                <li className="mx-2">
                  “우물 안 개구리가 되지 말자” 라는 생각으로 새로운 지식을 얻게
                  되었을 때, 찾아보고 탐구하는 습관을 가지기 위해 노력하고
                  있습니다.
                </li>
                <li className="mx-2">
                  아는 것에 그치지 않고 이를 프로젝트에 적용할 방법이 없을까
                  고민하는 습관을 가지고 있습니다.
                </li>
              </ul>
            </div>
            <div className="border-4 border-gray-400 rounded-md p-4 my-2">
              <Banner textSize="text-xl">질문하는 개발자</Banner>
              <ul className="list-disc">
                <li className="mx-2">
                  문제에 부딪혔을 때 혼자서만 해결책을 찾아 가기보단, 주변에
                  많이 물어보면서 사고를 확장해가는 모습을 가지고 있습니다.
                </li>
                <li className="mx-2">
                  이를 통해 궁금했던 부분뿐만 아니라 추가적인 지식을 얻을 수
                  있었습니다.
                </li>
              </ul>
            </div>
            <div className="border-4 border-gray-400 rounded-md p-4 my-2">
              <Banner textSize="text-xl">소통하는 개발자</Banner>
              <ul className="list-disc">
                <li className="mx-2">
                  혼자만의 개발보단 서로의 지식을 공유하는 자리에 참석하는 것을
                  좋아합니다.
                </li>
                <li className="mx-2">
                  개발자를 희망하는 학우들과 소통하고 서로의 지식을 공유하는
                  자리를 가지고 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IntroSection;
