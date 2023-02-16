interface ISectionsProps {
  img: string;
  left?: boolean;
  title: string;
  explanation: string;
}

export default function Sections({
  explanation,
  img,
  left,
  title,
}: ISectionsProps) {
  return (
    <>
      {left ? (
        <div className="grid grid-cols-2 mt-12 ">
          <div className="flex flex-col p-6">
            <h3 className="text-color-3 font-bold	">{title}</h3>
            <p className="text-sm">{explanation}</p>
          </div>
          <img src={img} alt={title} />
        </div>
      ) : (
        <div className="grid grid-cols-2 mt-12 ">
          <img src={img} alt={title} />
          <div className="flex flex-col p-6">
            <h3 className="text-color-3 font-bold	">{title}</h3>
            <p className="text-sm">{explanation}</p>
          </div>
        </div>
      )}
    </>
  );
}
