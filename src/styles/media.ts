import { breakpoints } from './breakpoints'

/**
 * @name small
 */

export const sm = (content: string): string => `
  @media (min-width: ${breakpoints.sm}) {
    ${content}
  }
`

/**
 * @name medium
 */

export const md = (content: string): string => `
  @media (min-width: ${breakpoints.md}) {
    ${content}
  }
`

/**
 * @name large
 */

export const lg = (content: string): string => `
  @media (min-width: ${breakpoints.lg}) {
    ${content}
  }
`

/**
 * @name xl
 */

export const xl = (content: string): string => `
  @media (min-width: ${breakpoints.xl}) {
    ${content}
  }
`
