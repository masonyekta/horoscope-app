/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a0a0a';
const tintColorDark = '#fff';

export const Colors = {
	light: {
		text: '#11181C',
		paragraph: '#525252',
		background: '#fff',
		tint: tintColorLight,
		icon: '#687076',
		tabIconDefault: '#687076',
		tabIconSelected: tintColorLight,
		itemBackground: '#f5f5f5',
	},
	dark: {
		text: '#ECEDEE',
		paragraph: '#f5f5f5',
		background: '#151718',
		tint: tintColorDark,
		icon: '#9BA1A6',
		tabIconDefault: '#9BA1A6',
		tabIconSelected: tintColorDark,
		itemBackground: '#0a0a0a',
	},
};
