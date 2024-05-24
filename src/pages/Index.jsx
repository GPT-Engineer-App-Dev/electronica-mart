import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaEnvelope, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/products"><FaMobileAlt /> Products</Link>
          <Link to="/about"><FaInfoCircle /> About Us</Link>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Image src="/images/hero-banner.jpg" alt="Hero Banner" mx="auto" mb={8} />
        <Heading as="h1" size="2xl" mb={4}>Welcome to Our Electronics Store</Heading>
        <Text fontSize="lg" mb={8}>Find the best deals on the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={8}>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" width="250px">
            <Image src="/images/product1.jpg" alt="Product 1" mb={4} />
            <Text fontWeight="bold">Product 1</Text>
            <Text>$199.99</Text>
          </Box>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" width="250px">
            <Image src="/images/product2.jpg" alt="Product 2" mb={4} />
            <Text fontWeight="bold">Product 2</Text>
            <Text>$299.99</Text>
          </Box>
          <Box bg="white" p={4} m={4} borderRadius="md" boxShadow="md" width="250px">
            <Image src="/images/product3.jpg" alt="Product 3" mb={4} />
            <Text fontWeight="bold">Product 3</Text>
            <Text>$399.99</Text>
          </Box>
        </Flex>
      </Box>

      {/* About Us Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>About Us</Heading>
        <Text maxW="600px" mx="auto">We are a leading electronics store offering a wide range of products from top brands. Our mission is to provide the best shopping experience for our customers.</Text>
      </Box>

      {/* Contact Form Section */}
      <Box as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>Contact Us</Heading>
        <VStack as="form" spacing={4} maxW="600px" mx="auto">
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Textarea placeholder="Message" />
          <Button colorScheme="blue" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;