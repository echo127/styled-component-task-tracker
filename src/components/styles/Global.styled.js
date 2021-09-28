import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
p {
  margin: 0;
}

img {
  max-width: 100%;
}

body {
  font-family: 'Poppins', sans-serif;
}

`

export default GlobalStyle