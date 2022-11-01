import CardSection from "./CardSection";
import Image from "next/image";

const CustomerSuportSection = () => {
  return (
    <CardSection
      title="Atención al cliente."
      subtitle={`¿Problemas creando torneos? Escribenos.
              ¿Problemas con tu cuenta? Contactanos que te ayudamos.`}
      withButtonCreate
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

export default CustomerSuportSection;
