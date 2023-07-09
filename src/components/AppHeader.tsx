import {
  Group,
  Header,
  Switch,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

export default function AppHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height="fit-content" p="xs">
      <Group position="apart">
        <Title order={1}>Afcam</Title>
        <Switch
          size="md"
          color={colorScheme === 'dark' ? 'gray' : 'dark'}
          onLabel={<IconSun size="1rem" stroke={2.5} color="yellow" />}
          offLabel={<IconMoonStars size="1rem" stroke={2.5} color="blue" />}
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
        />
      </Group>
    </Header>
  );
}
