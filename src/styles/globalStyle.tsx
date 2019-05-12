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
  margin-left: calc(100vw - 100%); 
  color: ${props => props.theme.colors.grey[6]};

  body ::-webkit-scrollbar {
    width: 7px;
  }

  body ::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
    border-radius: 5px;
  }

  body ::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
    transition: color .2s ease;
  }

  li {
    list-style: none;
  }

  /* custom style for date-time picker */
  .datetime-custom {
    width: 320px;
    .calendar table thead th {
      color: ${props => props.theme.colors.primary};
    }

    .calendar table tbody tr td.selected {
      background: ${props => props.theme.colors.secondary};
    }
  }
}

`
