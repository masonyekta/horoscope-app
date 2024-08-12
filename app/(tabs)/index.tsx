import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedItem } from '@/components/ThemedItem';
import { Icon } from '@/components/Icon';

import { getTime, fetchData } from '@/lib/utils';

type Horoscope = {
	id: string;
	slug: string;
	title: string;
	content: string;
	date: string;
};

export default function HomeScreen() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState<Horoscope[]>([]);

	useEffect(() => {
		setLoading(true);
		fetchData(setData, setLoading);
	}, []);

	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#000', dark: '#000' }}
			headerImage={
				<Image
					source={require('@/assets/images/main-header.jpg')}
					style={styles.headerImage}
				/>
			}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">{getTime()}</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedView>
					{isLoading ? (
						<ActivityIndicator />
					) : (
						<ThemedView style={styles.container}>
							{data.map((item, index) => (
								<ThemedItem style={styles.item} key={item.slug}>
									<Link href={`/details/${item.slug}`} asChild>
										<Pressable>
											<ThemedItem style={styles.horoscopeImage}>
												<Icon name={item.slug} />
												<ThemedText style={styles.title} type="subtitle">
													{item.title}
												</ThemedText>
												<ThemedText style={styles.date}>
													{item.date}
												</ThemedText>
											</ThemedItem>
										</Pressable>
									</Link>
								</ThemedItem>
							))}
						</ThemedView>
					)}
				</ThemedView>
			</ThemedView>
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
	container: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-between',
	},
	item: {
		width: '47%',
		padding: 5,
		borderWidth: 1,
		marginBottom: 20,
		height: 150,
		borderRadius: 5,
	},
	horoscope: {
		width: '100%',
		height: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		lineHeight: 0,
	},
	title: {
		fontSize: 16,
		flex: 0,
		marginTop: 5,
	},
	date: {
		fontSize: 10,
		flex: 0,
	},
	stepContainer: {
		gap: 0,
		marginBottom: 0,
	},
	horoscopeImage: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		height: '100%',
		minWidth: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
	},
});
