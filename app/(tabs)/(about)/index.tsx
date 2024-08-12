import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#000', dark: '#000' }}
			headerImage={
				<Image
					source={require('@/assets/images/about-header.jpg')}
					style={styles.headerImage}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">About</ThemedText>
			</ThemedView>
			<ThemedText>
				This is a simple horoscope app built with Expo and React Native. It retrieves data
				from a JSON file and displays the horoscope details. You can find the source code on
				GitHub.
			</ThemedText>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		height: '90%',
		width: '90%',
		alignSelf: 'center',
		top: 30,
		position: 'absolute',
	},
	titleContainer: {
		flexDirection: 'row',
		gap: 8,
	},
});
