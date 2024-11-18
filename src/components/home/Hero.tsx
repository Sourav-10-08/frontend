import {
  Box,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import {
  FaBrain,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";

const Hero = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      bg="#FFF2E1"
      height="100vh"
      position="relative"
      clipPath={{
        base: "ellipse(150% 90% at 50% 0%)",
        lg: "ellipse(100% 90% at 50% 0%)",
      }}
      px={{ base: "1rem", md: "3rem", lg: "5rem" }}
    >
      {/* Header */}
      <HStack justify="space-between" py={4}>
        {/* Logo and Name */}
        <HStack spacing={3}>
          <FaBrain size="2.5rem" color="brand.500" />
          <Text
            fontSize={{ base: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="secondary.500"
            fontFamily="cursive"
          >
            Brainlea
          </Text>
        </HStack>

        {/* Navbar Toggle Button for Small Screens */}
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          onClick={onToggle}
          aria-label="Toggle Navigation"
          size="xl"
          variant="unstyled"
          textAlign="end"
          minW={0}
        />

        {/* Desktop Menu */}
        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={8}
          justify="flex-end"
        >
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Careers</Button>
          <Button variant="ghost">Blog</Button>
          <Button variant="ghost">About Us</Button>
        </HStack>
      </HStack>

      {/* Mobile Menu (Shown when toggled) */}
      {isOpen && (
        <Stack
          display={{ base: "block", md: "none" }}
          spacing={4}
          bg="white"
          rounded="md"
          boxShadow="lg"
          position="absolute"
          top="70px"
          right={0}
          zIndex={10}
        >
          <Button leftIcon={<FaHome />} variant="ghost" w="100%">
            Home
          </Button>
          <Button leftIcon={<FaInfoCircle />} variant="ghost" w="100%">
            Career
          </Button>
          <Button leftIcon={<FaUser />} variant="ghost" w="100%">
            Blog
          </Button>
          <Button leftIcon={<FaUser />} variant="ghost" w="100%">
            About Us
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default Hero;
