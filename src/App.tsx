import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLocalStorage, useFavicon } from '@mantine/hooks';
import {
  MantineProvider,
  ColorSchemeProvider,
  createEmotionCache,
  type ColorScheme,
} from '@mantine/core';
import HomePage from './pages/HomePage';

const myCache = createEmotionCache({ key: 'afcampos' });

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'afcampos-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        emotionCache={myCache}
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
