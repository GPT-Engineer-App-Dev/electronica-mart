import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="#products">Products</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Image src="/images/hero-banner.jpg" alt="Hero Banner" mx="auto" mb={8} />
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Box as="section" id="products" py={20} textAlign="center">
        <Heading size="xl" mb={8}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="https://via.placeholder.com/150" alt="Product 1" mb={4} />
            <Heading size="md" mb={2}>Product 1</Heading>
            <Text mb={4}>Description of Product 1</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </Box>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="https://via.placeholder.com/150" alt="Product 2" mb={4} />
            <Heading size="md" mb={2}>Product 2</Heading>
            <Text mb={4}>Description of Product 2</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </Box>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" maxW="sm">
            <Image src="https://via.placeholder.com/150" alt="Product 3" mb={4} />
            <Heading size="md" mb={2}>Product 3</Heading>
            <Text mb={4}>Description of Product 3</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </Box>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box as="section" id="about" bg="gray.100" py={20} textAlign="center">
        <Heading size="xl" mb={8}>About Us</Heading>
        <Text maxW="2xl" mx="auto">
          ElectroShop is a leading retailer of electronics, offering a wide range of products from top brands. Our mission is to provide customers with the best shopping experience by offering high-quality products at competitive prices.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={20} textAlign="center">
        <Heading size="xl" mb={8}>Contact Us</Heading>
        <VStack spacing={4} maxW="md" mx="auto">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button colorScheme="teal">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;