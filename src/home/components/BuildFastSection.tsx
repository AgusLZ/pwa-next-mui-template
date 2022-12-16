import CardSection from "./CardSection";
import Image from "next/image";

const BuildFastSection = () => {
  return (
    <CardSection
      title="Crea torneos rápido"
      subtitle="Crea los torneos que quieras con los equipos que quieras, para jugar con tus amigos, expandir tu liga."
      withButtonCreate
      reverseContent
    >
      <img src="/imagenes/2.png" alt="Imagen de un equipo deportivo" width={300} id="img-1" />
    </CardSection>
  );
};

export default BuildFastSection;
