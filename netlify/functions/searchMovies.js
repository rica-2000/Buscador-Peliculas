export const handler = async (event, context) => {
	const apiKey = process.env.API_KEY;
	const search = event.queryStringParameters.query;

	if (!apiKey) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				error: "Server configuration error: Missing API Key",
			}),
		};
	}

	if (!search) {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "No search term provided" }),
		};
	}

	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`,
		);
		const data = await response.json();

		if (!response.ok) {
			return {
				statusCode: response.status,
				body: JSON.stringify(data),
			};
		}

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	} catch (error) {
		console.error("Lambda Error:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to fetch movies" }),
		};
	}
};
