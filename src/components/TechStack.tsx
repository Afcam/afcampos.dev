import { Group, Tooltip, useMantineTheme } from '@mantine/core';
import {
  IconBrandAws,
  IconBrandCpp,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSass,
  IconBrandSocketIo,
  IconBrandTypescript,
} from '@tabler/icons-react';

const renderLogo = (technology: string, size: string) => {
  const theme = useMantineTheme();
  const themeColor =
    theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[8];

  switch (technology.toLowerCase()) {
    case 'html':
      return <IconBrandHtml5 size={size} color="#E34F26" />;
    case 'css':
      return <IconBrandCss3 size={size} color="#1572B6" />;
    case 'sass':
      return <IconBrandSass size={size} color="#CC6699" />;
    case 'javascript':
      return <IconBrandJavascript size={size} color="#F7DF1E" />;
    case 'typescript':
      return <IconBrandTypescript size={size} color="#3178C6" />;
    case 'nodejs':
      return <IconBrandNodejs size={size} color="#339933" />;
    case 'mysql':
      return <IconBrandMysql size={size} color="#4479A1" />;
    case 'aws':
      return <IconBrandAws size={size} color="#FF9900" />;
    case 'cpp':
      return <IconBrandCpp size={size} color="#00599C" />;
    case 'git':
      return <IconBrandGit size={size} color="#F05032" />;
    case 'react':
      return <IconBrandReact size={size} color="#61DAFB" />;
    case 'socketio':
      return <IconBrandSocketIo size={size} color={themeColor} />;
    case 'mantine':
      return <IconBrandMantine size={size} color={themeColor} />;
    case 'nextjs':
      return <IconBrandNextjs size={size} color={themeColor} />;
    default:
      return null;
  }
};

interface Props {
  techStack: string[];
  size: string;
}

export default function TechStack({ techStack = [], size = '1rem' }: Props) {
  return (
    <Group>
      {techStack.map((technology) => (
        <Tooltip label={technology} openDelay={500} key={technology}>
          {renderLogo(technology, size)}
        </Tooltip>
      ))}
    </Group>
  );
}
