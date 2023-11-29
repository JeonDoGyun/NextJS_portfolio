import { useMemo, useState } from "react";
import { useInterval } from "../hooks/useInterval";

const AnimationTitle = () => {
  const title = useMemo(() => {
    return "안녕하세요! Frontend 개발자 전도균의 포트폴리오입니다";
  }, []);
  const [landingTitle, setLandingTitle] = useState("");
  const [count, setCount] = useState(0);

  useInterval(() => {
    // 만약, count가 completedTitle의 길이와 같거나 커지면 반복을 멈춘다.
    if (count >= title.length) {
      return;
    }

    setLandingTitle((prev) => {
      let result = prev ? prev + title[count] : title[0];
      setCount((prev) => prev + 1);

      return result;
    });
  }, 200);

  return (
    <div>
      <pre className="text-white text-shadow-lg shadow-yellow-500 text-3xl inline animate-typingCursor">
        {landingTitle}
      </pre>
    </div>
  );
};

export default AnimationTitle;
