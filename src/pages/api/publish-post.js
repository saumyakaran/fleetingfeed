import { publishPostToDB } from "@/lib/mongodb/publish";

export default async function handler(req, res) {
	try {
		const published = await publishPostToDB(req.body);
		res.status(200).json(published);
	} catch (err) {
		res.status(500).json({ statusCode: 500, message: err.message });
	}
}
