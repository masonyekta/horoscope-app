import { View, StyleSheet } from 'react-native';

import { WithLocalSvg } from 'react-native-svg/css';

export type IconProps = {
	name: string;
};

export function Icon({ name }: IconProps) {
	const Aquarius = require('@/assets/icons/aquarius.svg');
	const Aries = require('@/assets/icons/aries.svg');
	const Cancer = require('@/assets/icons/cancer.svg');
	const Capricorn = require('@/assets/icons/capricorn.svg');
	const Gemini = require('@/assets/icons/gemini.svg');
	const Leo = require('@/assets/icons/leo.svg');
	const Libra = require('@/assets/icons/libra.svg');
	const Pisces = require('@/assets/icons/pisces.svg');
	const Sagittarius = require('@/assets/icons/sagittarius.svg');
	const Scorpio = require('@/assets/icons/scorpio.svg');
	const Taurus = require('@/assets/icons/taurus.svg');
	const Virgo = require('@/assets/icons/virgo.svg');

	switch (name) {
		case 'aquarius':
			return <WithLocalSvg asset={Aquarius} style={styles.icon} />;
		case 'aries':
			return <WithLocalSvg asset={Aries} style={styles.icon} />;
		case 'cancer':
			return <WithLocalSvg asset={Cancer} style={styles.icon} />;
		case 'capricorn':
			return <WithLocalSvg asset={Capricorn} style={styles.icon} />;
		case 'gemini':
			return <WithLocalSvg asset={Gemini} style={styles.icon} />;
		case 'leo':
			return <WithLocalSvg asset={Leo} style={styles.icon} />;
		case 'libra':
			return <WithLocalSvg asset={Libra} style={styles.icon} />;
		case 'pisces':
			return <WithLocalSvg asset={Pisces} style={styles.icon} />;
		case 'sagittarius':
			return <WithLocalSvg asset={Sagittarius} style={styles.icon} />;
		case 'scorpio':
			return <WithLocalSvg asset={Scorpio} style={styles.icon} />;
		case 'taurus':
			return <WithLocalSvg asset={Taurus} style={styles.icon} />;
		case 'virgo':
			return <WithLocalSvg asset={Virgo} style={styles.icon} />;
		default:
			return <View />;
	}
}

const styles = StyleSheet.create({
	icon: {
		maxWidth: 40,
		maxHeight: 40,
	},
});
