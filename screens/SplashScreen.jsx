import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { splashStyles as styles } from '../styles/splashStyles';

const SplashScreen = ({ navigation }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.replace('HomeScreen');
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/icon.png')}
				style={styles.logo}
				resizeMode="contain"
			/>
		</View>
	);
};

export default SplashScreen;