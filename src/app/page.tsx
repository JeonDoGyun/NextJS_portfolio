import IntroSection from "./sections/IntroSection";
import StartingSection from "./sections/StartingSection";
import StrengthSection from "./sections/StrengthSection";

const Home = () => {
  return (
    <main>
      <StartingSection />
      <IntroSection />
      <StrengthSection />
      {/* <ProjectIntroSection /> */}
    </main>
  );
};

export default Home;
