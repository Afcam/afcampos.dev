import { Group, Stack, Title } from '@mantine/core';
import ProjectCards from './ProjectCards';

export default function ProjectsSection() {
  return (
    <Stack>
      <Title order={4}>🚀 Projects</Title>
      <Group grow>
        <ProjectCards />
      </Group>
    </Stack>
  );
}
