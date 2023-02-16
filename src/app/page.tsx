import "../app/globals.css";
import BannerComponent from "@/components/BannerComponent";
import { getApod, getMarsRoverPhotos } from "@/utils/dataApi";
import { use } from "react";
import About from "@/components/About";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Home() {
  const data = use(getApod());
  const fhazData = use(getMarsRoverPhotos("FHAZ"));
  const pancamData = use(getMarsRoverPhotos("RHAZ"));

  return (
    <>
      <BannerComponent
        title={data.title}
        img={data.hdurl}
        explanation={data.explanation}
      />
      <div className="lg:px-80 md:px-40 sm:px-20 max-[639px]:px-12 bg-slate-50 pb-12">
        <About />
        {fhazData.photos.map((photo: any, index: string) => (
          <Sections
            key={index}
            title={photo.camera.name}
            img={photo.img_src}
            explanation={photo.camera.full_name}
          />
        ))}
        {pancamData.photos.map((photo: any, index: string) => (
          <Sections
            key={index}
            title={photo.camera.name}
            img={photo.img_src}
            explanation={photo.camera.full_name}
            left
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
