import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.mainColor};
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(-1rem);
    }
  }
`

export const theme = {
    mainColor: '#ffef19',
    secondaryColor: '#000',
    borderRadius: '3px',
    headerHeight: '6rem',

    // font sizes
    font_sm: '0.75rem',
    font_base: '1rem',
    font_md: '1.25rem',
    font_lg: '1.563rem',
    font_xl: '1.953rem',
    font_2xl: '2.441rem',
    font_3xl: '3.052rem',

    // sizes are based on the font size, which is 16px
    size_4px: '0.25rem',
    size_8px: '0.5rem',
    size_12px: '0.75rem',
    size_16px: '1rem',
    size_20px: '1.25rem',
    size_24px: '1.5rem',
    size_28px: '1.75rem',
    size_32px: '2rem',
    size_36px: '2.25rem',
    size_40px: '2.5rem',
    size_44px: '2.75rem',
    size_48px: '3rem',
    size_52px: '3.25rem',
    size_60px: '3.75rem',
    size_64px: '4rem',
    size_80px: '5rem',
    size_88px: '5.5rem',
    size_100px: '6.25rem',
    size_120px: '7.5rem',
    size_128px: '8rem',
    size_140px: '8.75rem',
    size_152px: '9.5rem',
    size_180px: '11.75rem',
    size_200px: '12.5rem',
}
