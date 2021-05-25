# Create-React-App Template

![](https://img.shields.io/badge/TypeScript-informational?style=flat&logo=TypeScript&logoColor=white&color=4AB197)
![](https://img.shields.io/badge/Bootstrap-informational?style=flat&logo=Bootstrap&logoColor=white)
![](https://img.shields.io/badge/Styled--Components-blueviolet?style=flat&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/ESLint-yellow?style=flat&logo=ESLint&logoColor=white)
![](https://img.shields.io/badge/Prettier-yellow?style=flat&logo=Prettier&logoColor=white)

Auto Lint on pre-commit hook with [husky](https://github.com/typicode/husky): never push mistakes again !

## Responsive Design
This templates comes with a Styled-Components theme setup, including responsive breakpoints, media queries and global styles.

The breakpoints are the ones used by Bootstrap:

Breakpoint  |	Media query |	Dimensions
----------- | ----------- | ----------
Extra Small | xs          | < 576px
Small       |	sm          |	≥576px
Medium	    | md          |	≥768px
Large	      | lg          |	≥992px
Extra large |	xl          |	≥1200px


Usage example:

```javascript
import styled from 'styled-components/macro'
import { md, lg } from 'styles/media'

const Title = styled.h1`
  font-size: 12pt; // For mobile

  ${md(`
    font-size: 14pt; // Tablet
  `)}

  ${lg(`
    font-size: 16pt; // Desktop
  `)}
`
```

## Theming

You can add your color palette and other theme-related information to the theme in `src/styles/theme.ts`:

```javascript
const theme: DefaultTheme = {
  primary: 'red',
  accent: 'green',
  radius: '30px',
  shadow: '-8px -8px 30px #393E44',
  // etc...
}
```

To use a property of your theme in a Styled Component:

```javascript
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.primary}
`
```

## Usage
```
yarn install
yarn start
```