import CardSection from "./CardSection";
import Image from "next/image";

const BuildFastSection = () => {
  return (
    <CardSection
      title="Crea torneos rápido. Juega los mejores modos de competición"
      subtitle="Crea los torneos que quieras con los equipos que quieras, para jugar con tus amigos, expandir tu liga."
      withButtonCreate
      reverseContent
    >
      <Image
        src="https://picsum.photos/1200/800"
        alt="Demo de una web dedicada a la indumentaria"
        height="800px"
        width="1200px"
      />
    </CardSection>
  );
};

export default BuildFastSection;
