import Banner from "../components/Banner";

const InfoSection = () => {
  return (
    <section className="body-font text-white h-screen">
      <article className="introduction flex flex-col items-center gap-4">
        {/* <AnimationTitle /> */}
        <Banner textSize="text-4xl">안녕하세요!</Banner>
        <Banner textSize="text-3xl">
          Frontend 개발자 전도균의 포트폴리오입니다
        </Banner>
        <br className="hidden sm:block" />
      </article>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="w-[720px] h-[600px]"></div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="ml-4 inline-flex bg-gray-700 text-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 hover:text-gray-700 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
