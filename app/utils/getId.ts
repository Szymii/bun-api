// Not my fault -> it was chat GPT :/
export function getID(length: number): string {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	return Array.from(
		{ length },
		() => characters[Math.floor(Math.random() * characters.length)],
	).join("");
}
