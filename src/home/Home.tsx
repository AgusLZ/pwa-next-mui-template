import { Container, Stack } from "@mui/material";
import BuildFastSection from "./components/BuildFastSection";
import CustomerSuportSection from "./components/CustomerSuportSection";
import OnlineSaleSection from "./components/OnlineSaleSection";

const Home = () => {
  return (
    <>
      <Container maxWidth={false} className="background-light">
        <Container>
          <Stack spacing={8} py={8}>
            <BuildFastSection />
             <CustomerSuportSection />
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default Home;
