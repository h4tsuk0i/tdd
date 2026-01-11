import { Box } from "@mui/material";
import Calculator from "../components/Calculator";

const LandingPage = () => {
  return (
    <Box>
      <Calculator initialResult={0} />
    </Box>
  );
};
export default LandingPage;
