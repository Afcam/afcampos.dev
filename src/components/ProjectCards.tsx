import { Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import TechStack from './TechStack';

interface Props {
  name: string;
  description: string;
  techStack: string[];
  repo: string;
  link: string;
}

export default function ProjectCards({
  name,
  description,
  techStack,
  repo,
  link,
}: Props) {
  return (
    <Card shadow="sm" radius="md" withBorder h="100%">
      <Stack spacing="xs" h="100%">
        <Group position="apart">
          <Title order={5}>{name}</Title>
          <Group>
            <Button
              compact
              component="a"
              variant="subtle"
              href={repo}
              disabled={!repo}
            >
              <IconBrandGithub size="1rem" />
            </Button>
            <Button
              compact
              component="a"
              variant="subtle"
              href={link}
              disabled={!link}
            >
              <IconExternalLink size="1rem" />
            </Button>
          </Group>
        </Group>

        <Text size="sm" color="dimmed" h="100%">
          {description}
        </Text>
        <TechStack techStack={techStack} size="1.5rem" />
      </Stack>
    </Card>
  );
}
