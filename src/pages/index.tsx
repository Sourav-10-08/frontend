import Hero from "@/components/home/Hero";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bg="white">
      {/* Hero Section with Reversed Ellipse */}
      <Hero />
      <Box bg="blue" h="100vh"></Box>
    </Box>
  );
};

export default Home;
