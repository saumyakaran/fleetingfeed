export default async function handler(req, res) {
	try {
		const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
		res.status(200).send(posts.json());
	} catch (err) {
		res.status(500).send({ error: "failed to fetch data" });
	}
}
