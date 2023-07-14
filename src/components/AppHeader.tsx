import {
  Button,
  Group,
  Header,
  Title,
  Tooltip,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

export default function AppHeader() {
  const theme = useMantineTheme();

  return (
    <Header height="fit-content" p="xs">
      <Group position="apart">
        <Tooltip label="Hi. This is just my Nickname." openDelay={500}>
          <Title order={4}>Afcam</Title>
        </Tooltip>

        <Group>
          <Tooltip label="Gmail" openDelay={300}>
            <Button
              px="5px"
              compact
              component="a"
              target="_blank"
              variant="subtle"
              href={'mailto:afcampos.dev'}
            >
              <IconMail size="1.5rem" color="#EA4335" />
            </Button>
          </Tooltip>

          <Tooltip label="My Linkedin Profile" openDelay={300}>
            <Button
              px="5px"
              compact
              component="a"
              target="_blank"
              variant="subtle"
              href="https://www.linkedin.com/in/afcampos/"
            >
              <IconBrandLinkedin size="1.5rem" color="#0A66C2" />
            </Button>
          </Tooltip>

          <Tooltip label="My Github Profile" openDelay={300}>
            <Button
              px="5px"
              compact
              component="a"
              variant="subtle"
              href="https://github.com/Afcam"
            >
              <IconBrandGithub
                size="1.5rem"
                color={theme.colorScheme === 'dark' ? 'white' : 'black'}
              />
            </Button>
          </Tooltip>
        </Group>
      </Group>
    </Header>
  );
}
