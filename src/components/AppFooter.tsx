import {
  Switch,
  Footer,
  Group,
  Title,
  useMantineTheme,
  useMantineColorScheme,
  Button,
  Tooltip,
  Text,
} from '@mantine/core';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoonStars,
  IconSun,
} from '@tabler/icons-react';

export default function AppFooter() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Footer height="fit-content" p="xs">
      <Group position="apart">
        <Title order={6} size="0.75rem">
          © 2023 Afcam
        </Title>
        <Switch
          size="sm"
          color={colorScheme === 'dark' ? 'gray' : 'dark'}
          offLabel={
            <IconSun size="auto" stroke={2.5} color={theme.colors.yellow[4]} />
          }
          onLabel={
            <IconMoonStars
              size="auto"
              stroke={2.5}
              color={theme.colors.dark[6]}
            />
          }
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
        />
      </Group>
      <Group my="xs" spacing="xs">
        <Tooltip label="afcampos.dev repository" openDelay={300}>
          <Button
            px="5px"
            compact
            component="a"
            variant="subtle"
            href="https://github.com/Afcam/afcampos.dev"
          >
            <IconBrandGithub
              size="1rem"
              color={theme.colorScheme === 'dark' ? 'white' : 'black'}
            />
          </Button>
        </Tooltip>
        <Text>|</Text>
        <Tooltip label="My Linkedin Profile" openDelay={300}>
          <Button
            px="5px"
            compact
            component="a"
            target="_blank"
            variant="subtle"
            href="https://www.linkedin.com/in/afcampos/"
          >
            <IconBrandLinkedin size="1rem" color="#0A66C2" />
          </Button>
        </Tooltip>
      </Group>
    </Footer>
  );
}
