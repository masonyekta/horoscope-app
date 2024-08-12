import { Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ContactScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#000', dark: '#000' }}
			headerImage={
				<Image
					source={require('@/assets/images/contact-header.jpg')}
					style={styles.headerImage}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Contact</ThemedText>
			</ThemedView>
			<ThemedText>
				You can reach out by following and messaging me on{' '}
				<Link href="https://twitter.com/masonyekta">X (formerly Twitter)</Link> or you can
				send a direct email to{' '}
				<Link href="mailto:hello@masonyekta.com">hello@masonyekta.com.</Link>
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
