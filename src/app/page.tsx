import InfoSection from "./sections/InfoSection";
import IntroSection from "./sections/IntroSection";
import StrengthSection from "./sections/StrengthSection";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <InfoSection />
      <IntroSection />
      <StrengthSection />
    </main>
  );
};

export default Home;
