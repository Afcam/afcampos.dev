import {
  Group,
  Header,
  Switch,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function AppHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Header height="fit-content" p="xs">
      <Group position="apart">
        <Title order={1}>Afcam</Title>
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
    </Header>
  );
}
