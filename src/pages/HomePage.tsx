import { Container, Stack } from '@mantine/core';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <Container size="md" p="xl">
      <Stack spacing="xl" h="100%">
        <AppHeader />

        <Stack>
          <AboutSection />
          <ProjectsSection />
          <ToolsSection />
          <BlogSection />
        </Stack>

        <AppFooter />
      </Stack>
    </Container>
  );
}
