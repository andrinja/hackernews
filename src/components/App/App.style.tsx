import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

	body {
		padding: 0;
		margin: 0;
		font-family: 'Roboto';
		background: ${(p) => p.theme.colors.background};
	}
`;
