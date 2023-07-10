import { Group, Stack, Title } from '@mantine/core';
import ProjectCards from './ProjectCards';
import projects from '../assets/content/projects.json';

export default function ProjectsSection() {
  return (
    <Stack>
      <Title order={4}>🚀 Projects</Title>
      <Group grow position="apart">
        {projects.map((project, index) => (
          <ProjectCards
            key={index}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            repo={project.repo}
            link={project.link}
          />
        ))}
      </Group>
    </Stack>
  );
}
