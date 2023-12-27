import Image from "next/legacy/image";
import Link from "next/link";

const ProjectItem = async ({ data, imageUrl }: any) => {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const githubUrl = data.properties.Github.rich_text[0]?.href;
  const tags = data.properties.Tag.multi_select;

  return (
    <div className="flex flex-col m-3 rounded-xl border-4 border-yellow-500 max-w-[400px] max-h-[500px]">
      <Image
        src={imageUrl}
        className="rounded-md dark:bg-white"
        width="392"
        height="200"
        alt={title}
        quality={100}
        layout="fixed"
        objectFit="contain"
      />
      <div className="">
        <h2 className="p-3 font-bold text-xl text-yellow-500 rounded-md">
          {title}
        </h2>
        <h3 className="p-3 text-white">기간 ~ 기간 넣기</h3>
        <h3 className="my-1 p-3 font-semibold text-md rounded-md text-left text-white mx-auto">
          {description}
        </h3>
        <div className="flex flex-wrap items-start mt-2 justify-center">
          {tags.map((aTag: any) => (
            <span
              key={aTag.id}
              className="px-2 py-1 m-1 rounded-md font-medium bg-yellow-500"
            >
              {aTag.name}
            </span>
          ))}
        </div>
        <div className="text-right text-white">
          <Link
            className="inline-block px-4 py-2"
            href={githubUrl ? githubUrl : "Not found"}
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
