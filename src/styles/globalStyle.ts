import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Cabin", "SF Pro Text", "Frutiger", "Frutiger Linotype",
      "Univers", "Calibri", "Gill Sans", "Gill Sans MT", "Myriad Pro",
      "Myriad", "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L",
      "Tahoma", "Geneva", "Helvetica Neue", "Helvetica", "Arial", "sans-serif" !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
