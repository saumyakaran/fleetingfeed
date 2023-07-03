import clientPromise from ".";

let client;
let db;
let posts;

async function init() {
	if (db) return;

	client = await clientPromise.connect();
	db = await client.db("rageontwitter");
	posts = await db.collection("posts");
}

init().catch(console.dir);

export async function getPostsFromDB() {
	try {
		if (!posts) await init();
		const res = await posts.find({}).toArray();
		return res;
	} catch (e) {
		throw new Error("Could not get posts");
	}
}
