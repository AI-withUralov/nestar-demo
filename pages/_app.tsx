import type { AppProps } from 'next/app';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { light } from '../scss/MaterialTheme';
import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '@/apollo/client';
import '../scss/app.scss';
import '../scss/pc/main.scss';
import '../scss/mobile/main.scss';

export default function App({ Component, pageProps }: AppProps) {
	// @ts-ignore
	const [theme, setTheme] = useState(createTheme(light));

	// Socket.io, Redux, Mui, Apollo Client  .....
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
}

// 17-qator client apollo file ichidagi client.ts dan chaqirildi
