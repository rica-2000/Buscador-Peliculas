export const handler = async (event, context) => {
	const apiKey = process.env.API_KEY;
	const search = event.queryStringParameters.query;

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

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ error: "Failed to fetch movies" }),
		};
	}
};
