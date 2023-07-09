import { Group, Stack, Text, Title } from '@mantine/core';
import {
  IconBrandAws,
  IconBrandCpp,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandSass,
  IconBrandTypescript,
} from '@tabler/icons-react';

export default function ToolsSection() {
  return (
    <Stack>
      <Title order={4}>🛠 Language and tools</Title>
      <Group position="center">
        <IconBrandHtml5 size="2rem" color="#E34F26" />
        <IconBrandCss3 size="2rem" color="#1572B6" />
        <IconBrandSass size="2rem" color="#CC6699" />
        <IconBrandJavascript size="2rem" color="#F7DF1E" />
        <IconBrandTypescript size="2rem" color="#3178C6" />
        <IconBrandNodejs size="2rem" color="#339933" />
        <IconBrandMysql size="2rem" color="#4479A1" />
        <IconBrandAws size="2rem" color="#FF9900" />
        <IconBrandCpp size="2rem" color="#00599C" />
        <IconBrandGit size="2rem" color="#F05032" />
      </Group>
    </Stack>
  );
}
