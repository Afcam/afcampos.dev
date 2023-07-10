import { Button, Grid, Group, Stack, Title } from '@mantine/core';
import ProjectCards from './ProjectCards';
import projects from '../assets/content/projects.json';
import { IconPlus } from '@tabler/icons-react';

export default function ProjectsSection() {
  return (
    <Stack>
      <Group position="apart">
        <Title order={4}> Projects</Title>
        <Button compact component="a" variant="subtle">
          <IconPlus size="1rem" />
        </Button>
      </Group>
      <Grid>
        {projects.slice(0, 6).map((project, index) => (
          <Grid.Col span={4}>
            <ProjectCards
              key={index}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              repo={project.repo}
              link={project.link}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
