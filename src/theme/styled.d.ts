import 'styled-components';
import light from './light';

declare module 'styled-components' {  // Acessando o 'styled-components'
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {};
}