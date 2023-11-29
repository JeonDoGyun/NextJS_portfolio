"use client";

import Banner from "../components/Banner";

const IntroSection = () => {
  return (
    <section className="body-font h-screen text-white">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-20">
          <Banner textSize="text-4xl">About Me</Banner>
          <br className="hidden sm:block" />
          <div className="text-cneter">
            <Banner textSize="text-3xl">
              이러한 개발자가 되기 위해 노력하고 있습니다
            </Banner>
          </div>
        </h1>
        <div className="flex flex-row sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 w-auto gap-2">
          <div className="p-2 py-4 md:w-1/3 flex border-2 border-yellow-500 shadow-md shadow-yellow-500 rounded-md">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">
                노력하는 개발자
              </h2>
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
          </div>
          <div className="p-2 py-4 md:w-1/3 flex border-2 border-yellow-500 shadow-md shadow-yellow-500 rounded-md">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">
                질문하는 개발자
              </h2>
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
          </div>
          <div className="p-2 py-4 md:w-1/3 flex border-2 border-yellow-500 shadow-md shadow-yellow-500 rounded-md">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow pl-6">
              <h2 className="text-lg title-font font-medium mb-2">
                소통하는 개발자
              </h2>
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
      </div>
    </section>
  );
};

export default IntroSection;
