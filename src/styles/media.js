export const breakpoints = {
  xs: 0,
  sm: 320,
  md: 768,
  lg: 1280,
  xl: 1600
};

export const device = {
  xs: `(min-width: 0rem)`,
  sm: `(min-width: ${breakpoints.sm / 16}rem)`,
  md: `(min-width: ${breakpoints.md / 16}rem)`,
  lg: `(min-width: ${breakpoints.lg / 16}rem)`,
  xl: `(min-width: ${breakpoints.xl / 16}rem)`
};
