import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string,
      text_shadow: string,
      main_text_color: string,
      secondary_text_color: string,
      footer_background: string,
      photo_background: string,
    }
  }
}