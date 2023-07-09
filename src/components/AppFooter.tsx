import { ActionIcon, Footer, Group, Title } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';

export default function AppFooter() {
  return (
    <Footer height="fit-content" p="xs">
      <Group position="apart">
        <Title order={6}>Arthur Faria Campos</Title>
        <Group>
          <ActionIcon variant="subtle">
            <IconMail size="1.5rem" color="#EA4335" />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconBrandLinkedin size="1.5rem" color="#0A66C2" />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <IconBrandGithub size="1.5rem" />
          </ActionIcon>
        </Group>
      </Group>
    </Footer>
  );
}
