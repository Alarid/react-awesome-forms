export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type breakpointsTypes = {
  [breakpoint in Breakpoints]: string
}

export const breakpoints: breakpointsTypes = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
}
