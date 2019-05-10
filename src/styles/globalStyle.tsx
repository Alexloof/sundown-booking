import { createGlobalStyle } from 'styled-components'

export default () => createGlobalStyle`

@font-face {
  font-family: 'Helvetica Neue Med';
  src: local('Helvetica Neue Med'), url('/fonts/HelveticaNeueMed.ttf') format('truetype');
}

@font-face {
  font-family: 'Helvetica Neue';
  src: local('Helvetica Neue'), url('/fonts/HelveticaNeue.ttf') format('truetype');
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: 'Helvetica Neue';
  font-size: 16px;

  body ::-webkit-scrollbar {
    width: 7px;
  }

  body ::-webkit-scrollbar-track {
    background: transparent;
  }

  li {
    list-style: none;
  }
}

`
