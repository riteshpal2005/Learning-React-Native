import { createContext, useContext, useState } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export const ThemeContext = createContext('light');

export const AppContext = createContext('Stranger');

export default function RootLayout() {
	const [user, setUser] = useState('Ritesh');
	const [theme, setTheme] = useState('dark');
	return (
		<ThemeContext.Provider value={theme}>
			<AppContext value={user}>
				<PaperProvider>
					<Stack>
						{/* <Stack.Screen name='feed' /> */}
					</Stack>
				</PaperProvider>
			</AppContext>
		</ThemeContext.Provider>
	);
};