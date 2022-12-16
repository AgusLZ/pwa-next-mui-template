import CardSection from "./CardSection";
import Image from "next/image";

const CustomerSuportSection = () => {
  return (
    <CardSection
      title="Atención al cliente"
      subtitle={`¿Problemas creando torneos? Escribenos.
              ¿Problemas con tu cuenta? Contactanos que te ayudamos.`}
      withButtonCreate
    >
      <img src="/imagenes/1.png" alt="imagen de soporte técnico" width={300} id="img-1" />
    </CardSection>
  );
};

export default CustomerSuportSection;
