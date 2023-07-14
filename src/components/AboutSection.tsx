import { Stack, Text, Title } from '@mantine/core';

export default function AboutSection() {
  return (
    <Stack>
      <Title order={4}>👩‍💻 About Me</Title>
      <Text>
        Hi! 👋, my name is <strong>Arthur</strong> and I'm a{' '}
        <strong>full-stack</strong> developer with a B.Eng. in{' '}
        <strong>Electronic Engineering</strong>. I love building innovative
        software solutions and solving complex problems.
      </Text>
      <Text>
        Right now I'm building a <strong>browser game</strong> , learning{' '}
        <strong>Next.js</strong>, writing my <strong>field guide 🪄</strong> and
        exploring <strong>Toronto</strong>.
      </Text>
    </Stack>
  );
}
