import Banner from "../components/Banner";

const ProjectIntroSection = async () => {
  const projects = await getData();

  return (
    <section className="h-screen">
      <Banner textSize="text-4xl">Projects</Banner>
      <article className="projects-introduction">
        <div>프로젝트</div>
        {projects.results.map((aProject: any, index: number) => (
          <h1 key={index}>{aProject.id}</h1>
        ))}
      </article>
    </section>
  );
};

export default ProjectIntroSection;

// post notion API
async function getData() {
  const options = {
    method: "POST",
    headers: {
      "accept": "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      "Authorization": `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Period",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const projects = await res.json();
  // console.log(projects);

  return projects;
}
