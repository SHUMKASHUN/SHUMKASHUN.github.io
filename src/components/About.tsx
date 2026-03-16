import { Box, VStack, Heading, Text, useColorModeValue, Link, Container, Badge, Flex } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { institutionLogos } from '../data'
import { useLocalizedData } from '@/hooks/useLocalizedData'

// Import sub-components
import HeroSection from './about/HeroSection'
import NewsTimeline from './about/NewsTimeline'
import AccomplishmentsTerminal from './AccomplishmentsTerminal'
import PublicationsTerminal from './PublicationsTerminal'
import Experience from './Experience'

// Logo mappings derived from shared data layer
const researchLogos = institutionLogos
const universityLogos = institutionLogos

function About() {
  const { t } = useTranslation();
  const { research, experience, news, about, siteConfig } = useLocalizedData();
  // Sort news items by date (newest first)
  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => {
      if (!a.sortDate && !b.sortDate) return 0;
      if (!a.sortDate) return 1;
      if (!b.sortDate) return -1;
      return b.sortDate.localeCompare(a.sortDate);
    });
  }, [news]);

  return (
    <Box w="full" id="home">
      <VStack spacing={0} align="stretch" w="full">
        <HeroSection
          title={siteConfig.title}
          avatar={siteConfig.avatar}
          research={research.currentResearch}
          researchLogos={researchLogos}
          education={experience.education.courses}
          educationLogos={universityLogos}
        />
        
        <Box w="full" py={[2, 2, 3]}>
          <Container maxW={["full", "full", "7xl"]} px={[2, 4, 8]}>
            <VStack spacing={[2, 3, 4]} align="stretch">
              {/* News Section */}
              <Box w="full" id="updates" scrollMarginTop="88px">
                <Flex align="center" gap={3} mb={4}>
                  <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
                  <Heading size="md" fontWeight="semibold">{t('about.recentUpdates')}</Heading>
                  <Badge colorScheme="green" variant="subtle" fontSize="2xs" fontFamily="mono">{t('about.news')}</Badge>
                  <Box flex="1" h="1px" bg={useColorModeValue('gray.200', 'gray.700')} />
                </Flex>

                <NewsTimeline news={sortedNews} showHeader={false} />
              </Box>

              {/* Main Content Sections */}
              <VStack spacing={[6, 8, 10]} align="stretch" mt={[4, 6, 8]}>
                {/* Publications Section */}
                <Box w="full" id="publications" scrollMarginTop="88px">
                  <Flex align="center" gap={3} mb={[3, 4]}>
                    <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
                    <Heading size="md" fontWeight="semibold">{t('about.selectedPublications')}</Heading>
                    <Box flex="1" h="1px" bg={useColorModeValue('gray.200', 'gray.700')} />
                  </Flex>

                  <PublicationsTerminal embedded />
                </Box>

                {/* About Section */}
                <Box w="full" id="journey" scrollMarginTop="88px">

                  <VStack spacing={[4, 5, 6]} align="start" w="full">
                    <Flex align="center" gap={3} w="full">
                      <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
                      <Heading size={["sm", "md"]} fontWeight="semibold">{t('about.myJourney')}</Heading>
                      <Box flex="1" h="1px" bg={useColorModeValue('gray.200', 'gray.700')} />
                    </Flex>

                    <Experience embedded />

                    {about.mentorship && (
                      <Box w="full" id="mentorship">
                        <Flex align="center" gap={3} mb={3}>
                          <Box h="2px" w="20px" bg="cyan.400" borderRadius="full" flexShrink={0} />
                          <Heading size={["sm", "md"]} fontWeight="semibold">{about.mentorship.heading}</Heading>
                          <Box flex="1" h="1px" bg={useColorModeValue('gray.200', 'gray.700')} />
                        </Flex>
                        {about.mentorship.description && (
                          <Text fontSize="xs" lineHeight="tall" color={useColorModeValue('gray.500', 'gray.400')} mb={4}>
                            {about.mentorship.description}
                          </Text>
                        )}
                        <VStack spacing={0} align="stretch">
                          {about.mentorship.mentees.map((mentee, index) => (
                            <Flex
                              key={index}
                              align="center"
                              gap={3}
                              py={2.5}
                              borderBottom="1px solid"
                              borderColor={useColorModeValue('gray.100', 'gray.800')}
                            >
                              <Box w="6px" h="6px" borderRadius="full" bg="cyan.400" flexShrink={0} />
                              <Link href={mentee.url} isExternal _hover={{ textDecoration: 'none' }}>
                                <Text fontSize="sm" fontWeight="medium"
                                  color={useColorModeValue('gray.700', 'gray.200')}
                                  transition="color 0.15s" _hover={{ color: 'cyan.400' }}>
                                  {mentee.name}
                                </Text>
                              </Link>
                              {mentee.note && (
                                <Text fontSize="2xs" fontFamily="mono" color={useColorModeValue('gray.400', 'gray.500')}>
                                  {mentee.note}
                                </Text>
                              )}
                            </Flex>
                          ))}
                        </VStack>
                      </Box>
                    )}
                  </VStack>
                </Box>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Accomplishments - terminal style */}
        <Box w="full" mt={[4, 6, 10]} id="awards" scrollMarginTop="88px">
          
          <AccomplishmentsTerminal />
        </Box>
      </VStack>
    </Box>
  )
}

export default About
