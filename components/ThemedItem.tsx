import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
	lightColor?: string;
	darkColor?: string;
};

export function ThemedItem({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'itemBackground');
	const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'itemBackground');

	return <View style={[{ backgroundColor, borderColor }, style]} {...otherProps} />;
}
