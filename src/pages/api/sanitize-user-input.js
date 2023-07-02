import sanitize from "mongo-sanitize";

export default function handler(req, res) {
	const sanitizedInput = sanitize(req.body);
	res.status(200).json({ sanitizedInput });
}
