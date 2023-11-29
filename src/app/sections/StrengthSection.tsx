import Banner from "../components/Banner";
import Tag from "../components/Tag";
import TextCard from "../components/TextCard";

const StrengthSection = () => {
  const frontendTags = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Redux",
    "Recoil",
    "React Query",
    "Tailwind CSS",
  ];
  const versionControlTags = ["git", "Github"];
  const strengthTextLeft = [
    {
      title: "Web",
      description: [
        "웹 서버와 웹 브라우저 사이에 이루어지는 통신과정을 이해하고 있습니다.",
        "HTML, CSS, Javascript를 통해 웹 페이지가 렌더링 되는 과정을 이해하고 있습니다.",
      ],
    },
    {
      title: "CSS Style",
      description: [
        "Tailwind를 사용한 CSS 스타일링에 익숙합니다.",
        "MUI를 통해 HeadlessUI를 사용할 수 있습니다.",
      ],
    },

    {
      title: "React",
      description: [
        "CRA를 통한 CSR 개발에 익숙합니다.",
        "기본적인 React의렌더링, 리렌더링 과정을 이해하고 있습니다.",
        "useState, useEffect 등 React hook을 활용할 수 있습니다.",
      ],
    },
  ];
  const strengthTextRight = [
    {
      title: "Javascript & Typescript",
      description: [
        "ES6 문법을 통한 코드 작성에 익숙합니다.",
        "DOM 조작을 통해 HTML 엘리먼트를 동적으로 조작할 수 있습니다.",
        "Javascript로 작성한 코드를 Typescript로 변환하는 데에 익숙합니다.",
      ],
    },
    {
      title: "State Management",
      description: [
        "Redux를 사용하여 상태를 store에 저장하여 전역으로 관리해 본 경험이 있습니다.",
        "Recoil을 사용하여 전역 상태를 관리해 본 경험이 있습니다.",
        "React-query를 사용하여 Server Side State를 처리해 본 경험이 있습니다. ",
      ],
    },
  ];

  return (
    <section className="text-white">
      <article className="skills flex flex-col gap-4">
        <Banner textSize="text-4xl">Skills</Banner>
        <div className="frontend-skill-tags">
          <Banner textSize="text-2xl text-yellow-500">Frontend</Banner>
          <hr className="mb-2 border-2 border-yellow-500" />
          {frontendTags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className="version-control-skill-tags">
          <Banner textSize="text-2xl text-yellow-500">Version Control</Banner>
          <hr className="mb-2 border-2 border-yellow-500" />
          {versionControlTags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className="communication-skill-tags">
          <Banner textSize="text-2xl text-yellow-500">Communication</Banner>
          <hr className="mb-2 border-2 border-yellow-500" />
          <Tag>Figma</Tag>
        </div>
      </article>
      <article className="strength">
        <Banner textSize="text-4xl">Strength</Banner>
        <div className="grid grid-cols-2 gap-2">
          <div className="">
            {strengthTextLeft.map((strengthInfo, index) => (
              <TextCard
                key={index}
                title={strengthInfo.title}
                description={strengthInfo.description}
              />
            ))}
          </div>
          <div>
            {strengthTextRight.map((strengthInfo, index) => (
              <TextCard
                key={index}
                title={strengthInfo.title}
                description={strengthInfo.description}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default StrengthSection;
