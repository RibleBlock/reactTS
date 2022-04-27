import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';  // Não esquecer de importar o arquivo do theme

import GlobalStyles from './assets/style/GlobalStyles';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <ThemeProvider theme={dark}> {/** ThemeProvider vai prover todo theme light ou dark para toda a aplicacao */}
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}