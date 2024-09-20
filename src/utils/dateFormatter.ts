export function formatDateToText(date = new Date()): string {
	const formattedDate = date.toLocaleDateString("pt-BR", {
		dateStyle: "full",
	});

	return formattedDate[0].toUpperCase() + formattedDate.slice(1);
}
