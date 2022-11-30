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
      <img src="/imagenes/2.png" alt="Imagen de un equipo deportivo" />
    </CardSection>
  );
};

export default BuildFastSection;
