import {
  ActionIcon,
  Button,
  Card,
  Group,
  HoverCard,
  Image,
  Indicator,
  Spoiler,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import bandsite from '../assets/bansite.png.png';
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
  const matches = useMediaQuery('(min-width: 700px)');
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      h="100%"
      // miw={matches ? '32%' : '100%'}
      // mih={matches ? '250px' : '130px'}
    >
      {/* <Card.Section>
        <Image src={bandsite} w="100%" alt="Norway" />
      </Card.Section> */}
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
