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
      miw={matches ? '30%' : '100%'}
      mih={matches ? '180px' : '130px'}
    >
      {/* <Card.Section>
        <Image src={bandsite} w="100%" alt="Norway" />
      </Card.Section> */}
      <Stack py="xs" spacing="xs">
        <Group position="apart">
          <Title order={5}>{name}</Title>
          <TechStack techStack={techStack} size="1rem" />
        </Group>

        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Group>
          <Button
            compact
            component="a"
            variant="subtle"
            href={repo}
            disabled={false}
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
      </Stack>
    </Card>
  );
}

{
  /* <Indicator label="New" size={16}>
</Indicator> */
}
