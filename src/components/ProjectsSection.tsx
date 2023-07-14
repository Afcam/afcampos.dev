import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import PROJECTS_DATA from '../assets/content/projects.json';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = PROJECTS_DATA.slice(0, 6).map((project) => (
    <ProjectCard
      key={project.name}
      name={project.name}
      description={project.description}
      techStack={project.techStack}
      repo={project.repo}
      link={project.link}
    />
  ));

  return (
    <Stack>
      <Group position="apart">
        <Title order={4}> Projects</Title>
        <Button compact component="a" variant="subtle">
          <Group spacing="xs">
            <Text>More Projects</Text>
            <IconPlus size="1rem" />
          </Group>
        </Button>
      </Group>
      <Group position="center">{projects}</Group>
    </Stack>
  );
}
