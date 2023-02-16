interface IBannerProps {
  img: string;
  title: string;
  explanation: string;
}

export default function BannerComponent({
  explanation,
  img,
  title,
}: IBannerProps) {
  return (
    <div className="lg:grid lg:grid-cols-2 md:flex md:flex-col">
      <img src={img} alt={title} />
      <div className="flex lg:px-12 lg:pt-12 lg:pb-0 md:p-12 max-[767px]:p-12 flex-col items-center justify-center">
        <h1 className="text-color-3 mb-3 font-bold text-4xl">{title}</h1>
        <p className="text-sm">{explanation}</p>
      </div>
    </div>
  );
}
