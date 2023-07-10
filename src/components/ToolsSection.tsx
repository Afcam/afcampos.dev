import { Group, Stack, Title } from '@mantine/core';
import TechStack from './TechStack';

export default function ToolsSection() {
  const techStack = [
    'HTML',
    'CSS',
    'Sass',
    'Javascript',
    'Typescript',
    'React',
    'Nodejs',
    'socketio',
    'MySql',
    'Aws',
    'Cpp',
    'Git',
  ];
  return (
    <Stack>
      <Title order={4}>🛠 Language and tools</Title>
      <Group position="center">
        <TechStack techStack={techStack} size="2rem" />
      </Group>
    </Stack>
  );
}
