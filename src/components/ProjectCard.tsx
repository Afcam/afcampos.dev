import { Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import TechStack from './TechStack';
import { useMediaQuery } from '@mantine/hooks';

interface Props {
  name: string;
  description: string;
  techStack: string[];
  repo: string;
  link: string;
}

export default function ProjectCard({
  name,
  description,
  techStack,
  repo,
  link,
}: Props) {
  const matches = useMediaQuery('(min-width: 56.25em)');
  return (
    <Card
      shadow="sm"
      radius="md"
      p="sm"
      withBorder
      sx={(theme) => ({
        width: matches ? '32%' : '100%',
        height: '10rem',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[1],
        },
      })}
    >
      <Stack spacing="xs" justify="space-between" h="100%">
        <Group position="apart">
          <Title order={5}>{name}</Title>
          <Group spacing="xs">
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

        <Text size="xs" color="dimmed" lineClamp={3}>
          {description}
        </Text>
        <TechStack techStack={techStack} size="1rem" />
      </Stack>
    </Card>
  );
}
