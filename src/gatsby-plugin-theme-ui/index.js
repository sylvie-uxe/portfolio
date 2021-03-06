const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Montserrat',
    heading: 'Prompt',
    monospace: 'Roboto Mono',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 200,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: 1.125,
  },
  colors: {
    text: '#0c1219',
    alphaBackground: '#0c1219dd',
    alphaText: '#fefefe',
    background: '#fefefe',
    primary: '#0788d9',
    primaryDark: '#005ca7',
    secondary: '#ecede8',
    accent: '#eb4f83',
    modes: {
      dark: {
        text: '#fefefe',
        alphaBackground: '#0c1219dd',
        alphaText: '#fefefe',
        background: '#0c1219',
        primary: '#0788d9',
        primaryDark: '#61b7ff',
        secondary: '#ecede8',
        accent: '#eb4f83',
      },
    },
  },
  buttons: {
    ninja: {
      color: 'background',
      bg: 'background',
    },
    clickme: {
      color: 'primary',
      bg: 'background',
    },
  },
  text: {
    body: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    heading: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    p: {
      variant: 'text.body',
      fontSize: 2,
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
  },
};

export default theme;
