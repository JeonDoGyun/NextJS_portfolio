import Banner from "./Banner";

interface TextCard {
  title: string;
  description: Array<string>;
}

const TextCard = ({ title, description }: TextCard) => {
  return (
    <div className="m-2">
      <Banner textSize="text-3xl">{title}</Banner>
      <div className="px-5 py-4 border-4 rounded-xl">
        <ul className="list-disc">
          {description.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextCard;
