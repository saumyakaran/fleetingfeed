import { getPostsFromDB } from "@/lib/mongodb/posts";

export default async function handler(req, res) {
	try {
		const postsData = await getPostsFromDB();
		const posts = await postsData.json();
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({ error: "failed to fetch data" });
	}
}
