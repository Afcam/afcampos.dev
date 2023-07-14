import {
  Button,
  Footer as MantineFooter,
  Group,
  Title,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

export default function Footer() {
  const theme = useMantineTheme();

  return (
    <MantineFooter height="fit-content" p="xs">
      <Group position="apart">
        <Title order={6}>Arthur Faria Campos</Title>
        <Group>
          <Button
            compact
            component="a"
            target="_blank"
            variant="subtle"
            href={'mailto:afcampos.dev'}
          >
            <IconMail size="1.5rem" color="#EA4335" />
          </Button>
          <Button
            compact
            component="a"
            target="_blank"
            variant="subtle"
            href="https://www.linkedin.com/in/afcampos/"
          >
            <IconBrandLinkedin size="1.5rem" color="#0A66C2" />
          </Button>
          <Button
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
        </Group>
      </Group>
    </MantineFooter>
  );
}
