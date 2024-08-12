import { StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedItem } from '@/components/ThemedItem';
import { Icon } from '@/components/Icon';

import { Colors } from '@/constants/Colors';
import { slugToTitle, fetchDataBySlug } from '@/lib/utils';

import { useColorScheme } from '@/hooks/useColorScheme';

type Horoscope = {
	id: string;
	slug: string;
	title: string;
	content: string;
	date: string;
};

export default function DetailsScreen() {
	// Get the slug from the URL
	const { slug } = useLocalSearchParams();
	const colorScheme = useColorScheme();
	const title = slug !== undefined && !Array.isArray(slug) ? slug : 'Details';

	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState<Horoscope[]>([]);

	useEffect(() => {
		setLoading(true);
		fetchDataBySlug(Array.isArray(slug) ? slug[0] : slug, setData, setLoading);
	}, [slug]);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
			headerImage={
				<ThemedItem style={styles.headerImage}>
					<Icon name={Array.isArray(slug) ? slug[0] : slug} />
					<ThemedItem style={styles.titleContainer}>
						<ThemedText type="title">{slugToTitle(title)}</ThemedText>
					</ThemedItem>
				</ThemedItem>
			}
		>
			<ThemedView style={styles.container}>
				<Stack.Screen
					options={{
						title: slugToTitle(title),
						headerBackTitle: 'Back',
						headerTintColor: Colors[colorScheme ?? 'light'].tint,
					}}
				/>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<ThemedText>
						{data.map((item) => (
							<ThemedView key={item.slug}>
								<ThemedText>{item.content}</ThemedText>
							</ThemedView>
						))}
					</ThemedText>
				)}
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	headerImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	titleContainer: {
		flexDirection: 'row',
		marginTop: 20,
		gap: 8,
	},
});
