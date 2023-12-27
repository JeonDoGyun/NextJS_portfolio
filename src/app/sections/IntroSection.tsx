"use client";

import Banner from "../components/Banner";

const IntroSection = () => {
  return (
    <section className="body-font h-screen text-white">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-20">
          <div className="text-center">
            <Banner textSize="text-4xl ">안녕하세요!</Banner>
            <Banner textSize="text-3xl">
              Frontend 개발자 전도균의 포트폴리오입니다
            </Banner>
          </div>
          <br />
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
            <div className="flex-grow pl-4">
              <h2 className="text-xl title-font font-semibold mb-2 text-center">
                새로운 기술을 탐구하는 개발자
              </h2>
              <ul className="list-disc">
                <li className="text-lg font-semibold">
                  {
                    '새로운 기술을 접했을 때 거부감 없이 받아들이며 "내가 하는 작업에 적용시킬 수는 없을까" 고민하는 습관을 가지고 있습니다.'
                  }
                </li>
                <li className="text-lg font-semibold">
                  뉴스레터와 테크 블로그를 통해 지속적인 개발 트랜드를 탐색하고
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 py-4 md:w-1/3 flex border-2 border-yellow-500 shadow-md shadow-yellow-500 rounded-md">
            <div className="flex-grow pl-4">
              <h2 className="text-xl title-font font-semibold mb-2 text-center">
                질문으로 소통하는 개발자
              </h2>
              <ul className="list-disc">
                <li className="text-lg font-semibold">
                  문제에 부딪혔을 때 혼자서만 해결책을 찾아 가기보단, 주변에
                  물어보면서 사고를 확장하고자 노력하고 있습니다.
                </li>
                <li className="text-lg font-semibold">
                  조언을 받아들이는 데에 거부감이 없고, 의문이 생기면 자신의
                  의견을 제시하여 양방향으로 소통하고자 노력하고 있습니다.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-2 py-4 md:w-1/3 flex border-2 border-yellow-500 shadow-md shadow-yellow-500 rounded-md">
            <div className="flex-grow pl-4">
              <h2 className="text-xl title-font font-semibold mb-2 text-center">
                함께 성장하는 개발자
              </h2>
              <ul className="list-disc">
                <li className="text-lg font-semibold">
                  혼자만의 공부보다 서로의 지식을 공유하는 자리를 만들거나
                  참석하는 것을 좋아합니다.
                </li>
                <li className="text-lg font-semibold">
                  알고리즘, 프로젝트 개발 스터디를 소규모로 만들어 함께 발전하는
                  문화를 만들고자 노력하고 있습니다.
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
