import { Box, Container } from "@mui/material";
import Calculator from "../components/Calculator";

const LandingPage = () => {
  return (
    <Container sx={{minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Calculator />
    </Container>
  );
};
export default LandingPage;
