import { Container, Stack, Space } from '@mantine/core';

import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <Container size="md" p="xl">
      <AppHeader />
      <Stack p="md" h="100%">
        <AboutSection />
        <ProjectsSection />
        {/* <ToolsSection /> */}
      </Stack>
      <Space h="xl" />
      <Footer />
    </Container>
  );
}
