export function getDate() {
	const date = new Date();
	const [month, day, year] = date
		.toLocaleDateString('en-US', {
			month: '2-digit',
			day: '2-digit',
			year: 'numeric'
		})
		.split('/');
	return `${year}-${month}-${day}`;
}
