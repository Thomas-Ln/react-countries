import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.04s ease-out;
  }

  ::placeholder,
  select,
  .dropdown button,
  .dropdown-menu,
  .dropdown-item,
  form *,
  form button,
  .back-button {
    color: ${({ theme }) => theme.text};
  }

  header,
  form *,
  .card-body,
  .card-img-wrapper,
  .badge,
  .dropdown button,
  .dropdown-menu,
  .back-button {
    background: ${({ theme }) => theme.component};
  }
`
