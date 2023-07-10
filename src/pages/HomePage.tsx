import { Container, Stack } from '@mantine/core';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <Container size="md" p="xl" mih="100vh">
      <Stack spacing="xl">
        <AppHeader />

        <Stack>
          <AboutSection />
          <ProjectsSection />
          <ToolsSection />
        </Stack>

        <AppFooter />
      </Stack>
    </Container>
  );
}
