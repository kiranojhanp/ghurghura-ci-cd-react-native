export const theme = {
  colors: {
    blood: '#eb4d4b',
    barbie: '#e056fd',
    pumpkin: '#f0932b',
    background: '#ffffff',
  },
  components: {
    typography: {
      bold: {
        fontWeight: 'bold',
      },
      thin: {
        fontWeight: '300',
      },
    },
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  utils: {
    hexToRGBA: (hex: string, opacity: number) => {
      const rgb = hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16));
      return `rgba(${rgb.at(0)}, ${rgb.at(1)}, ${rgb.at(2)}, ${opacity})`;
    },
  },
} as const;

/* add “as const” to make sure TypeScript knows it’s a constant object and not a mutable
 * https://reactnativeunistyles.vercel.app/start/setup/
 */
