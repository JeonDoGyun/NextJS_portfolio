import IntroSection from "./sections/IntroSection";
import StrengthSection from "./sections/StrengthSection";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <IntroSection />
      <StrengthSection />
    </main>
  );
};

export default Home;
