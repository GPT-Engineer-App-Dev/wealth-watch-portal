import { Container, VStack, Heading, Text, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="background"> {/* Added bg prop */}
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Financial News Today
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Stay updated with the latest financial news and trends.
        </Text>
        <Flex justify="space-around" wrap="wrap">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="/images/market-news.jpg" alt="Market News" />
            <Box p={6}>
              <Box display="flex" alignItems="baseline">
                <FaNewspaper />
                <Text ml={2} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                  Market News
                </Text>
              </Box>
              <Link mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold" href="#">
                Latest updates on stock markets
              </Link>
              <Text mt={2} color="gray.500">
                Get the latest insights and analysis on stock market trends.
              </Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="/images/economy.jpg" alt="Economy" />
            <Box p={6}>
              <Box display="flex" alignItems="baseline">
                <FaChartLine />
                <Text ml={2} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                  Economy
                </Text>
              </Box>
              <Link mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold" href="#">
                Economic indicators and news
              </Link>
              <Text mt={2} color="gray.500">
                Stay informed about the latest economic developments and indicators.
              </Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Image src="/images/personal-finance.jpg" alt="Personal Finance" />
            <Box p={6}>
              <Box display="flex" alignItems="baseline">
                <FaMoneyBillWave />
                <Text ml={2} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                  Personal Finance
                </Text>
              </Box>
              <Link mt={1} display="block" fontSize="lg" lineHeight="normal" fontWeight="semibold" href="#">
                Tips for managing your finances
              </Link>
              <Text mt={2} color="gray.500">
                Learn how to manage your personal finances effectively.
              </Text>
            </Box>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;