import {
  Box, Flex, IconButton, useColorMode, HStack, Link as ChakraLink, Image,
  useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
  VStack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'publications', label: t('nav.publications') },
    { id: 'journey', label: t('nav.experience') },
    { id: 'awards', label: t('about.awardsAndHonors') },
  ]

  const scrollToSection = (id: string) => {
    onClose()
    const target = document.getElementById(id)
    if (!target) return
    const nav = document.querySelector('nav')
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <Box minH="100vh" w="100vw" className={colorMode === 'dark' ? 'dark-theme' : ''}>
      <Box
        as="nav"
        py={4}
        borderBottom="1px solid"
        borderColor="var(--border-color)"
        position="sticky"
        top={0}
        bg="var(--bg-color)"
        zIndex={1000}
        w="full"
      >
        <Flex
          justify="center"
          align="center"
          w="full"
          px={4}
          position="relative"
          minH="40px"
        >
          {/* Mobile: hamburger */}
          <Box display={{ base: 'block', md: 'none' }} position="absolute" left={4}>
            <IconButton
              aria-label={t('aria.openNav')}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="var(--text-color)"
            />
          </Box>

          {/* Desktop: logo left */}
          <ChakraLink
            as="button"
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            _hover={{ opacity: 0.85 }}
            transition="opacity 0.15s"
            onClick={() => scrollToSection('home')}
            position="absolute"
            left={4}
          >
            <Image
              src={`${import.meta.env.BASE_URL}logo-icon.svg`}
              alt="TermHub"
              h="28px"
              w="28px"
            />
          </ChakraLink>

          {/* Desktop nav (centered) */}
          <HStack
            spacing={8}
            display={{ base: 'none', md: 'flex' }}
            mx="auto"
            justify="center"
          >
            {navItems.map((item) => {
              return (
                <ChakraLink
                  as="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  color="var(--text-color)"
                  textDecoration="none"
                  pb="2px"
                  fontSize="1rem"
                  fontWeight="400"
                  transition="color 0.2s ease"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{
                    color: 'var(--accent-color)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </ChakraLink>
              )
            })}
          </HStack>
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }} position="absolute" right={4}>
            <IconButton
              aria-label={t('aria.toggleColorMode')}
              icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color="var(--text-color)"
              _hover={{
                bg: 'var(--hover-color)',
                transform: 'translateY(-2px)'
              }}
              transition="all 0.2s"
            />
          </HStack>
        </Flex>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="var(--bg-color)">
            <DrawerHeader color="var(--text-color)">{t('nav.navigation')}</DrawerHeader>
            <DrawerBody>
              <VStack align="stretch" spacing={3}>
                {navItems.map((item) => {
                  return (
                    <ChakraLink
                      as="button"
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      color="var(--text-color)"
                      transition="color 0.2s ease"
                      _focus={{ boxShadow: 'none' }}
                      _hover={{ color: 'var(--accent-color)' }}
                      fontWeight={400}
                      textAlign="left"
                    >
                      {item.label}
                    </ChakraLink>
                  )
                })}
                <IconButton
                  aria-label={t('aria.toggleColorMode')}
                  icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                  onClick={toggleColorMode}
                  variant="outline"
                  color="var(--text-color)"
                  alignSelf="flex-start"
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box w="full" px={4}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
