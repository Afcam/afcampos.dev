import { Group } from '@mantine/core';
import {
  IconBrandAws,
  IconBrandCpp,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSass,
  IconBrandSocketIo,
  IconBrandTypescript,
} from '@tabler/icons-react';

const renderLogo = (technology: string, size: string) => {
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
      return <IconBrandSocketIo size={size} color="#010101" />;
    default:
      return null;
  }
};

interface Props {
  techStack: string[];
  size: string;
}
const defaultProps: Props = {
  techStack: [],
  size: '1rem',
};
export default function TechStack({ techStack, size }: Props) {
  return (
    <Group>
      {techStack.map((technology) => (
        <div key={technology}>{renderLogo(technology, size)}</div>
      ))}
    </Group>
  );
}
