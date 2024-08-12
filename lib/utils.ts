const API_URL = 'https://horoscope-scraper.vercel.app/api/horoscopes';

// Get current date
export function getTime() {
	// return new Date().toDateString()
	const currentDate = new Date(); // Current date and time
	const isoString = currentDate.toISOString();

	// Convert ISO string to Date object
	const dateObject = new Date(isoString);

	// Format the date
	const options: Intl.DateTimeFormatOptions = {
		timeZone: 'America/Toronto',
		weekday: 'long',
		month: 'long',
		day: 'numeric',
	};
	const formattedDateString = dateObject.toLocaleDateString('en-US', options);

	return formattedDateString;
}

// Convert slug to title
export function slugToTitle(slug: string) {
	return slug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

// Fetch horoscope data
export const fetchData = async (
	setData: (data: any) => void,
	setLoading: (loading: boolean) => void
) => {
	try {
		const response = await fetch(API_URL);
		const json = await response.json();
		setData(json.horoscopes);
	} catch (error) {
		console.error(error);
	} finally {
		setLoading(false);
	}
};

// Fetch horoscope data by slug
export const fetchDataBySlug = async (
	slug: string,
	setData: (data: any) => void,
	setLoading: (loading: boolean) => void
) => {
	try {
		const response = await fetch(API_URL);
		const json = await response.json();
		const filteredData = json.horoscopes.filter((item: any) => item.slug === slug);
		setData(filteredData);
	} catch (error) {
		console.error(error);
	} finally {
		setLoading(false);
	}
};
