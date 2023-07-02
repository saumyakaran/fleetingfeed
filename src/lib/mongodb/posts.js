import clientPromise from ".";

let client;
let db;
let posts;

async function init() {
	if (db) return;
	try {
		client = await clientPromise;
		console.log("\n\n-----------------\n\n");
		console.log(client);
		db = await client.db();
		console.log(db);
		posts = await db.collection("posts");
		console.log(posts);
		console.log("\n\n-----------------\n\n");
	} catch (e) {
		throw new Error("Could not connect to DB");
	}
}

(async function () {
	await init();
})();

export async function getPostsFromDB() {
	try {
		if (!posts) await init();
		const res = await posts.find({}).toArray();
		console.log(res);
		return res;
	} catch (e) {
		throw new Error("Could not get posts");
	}
}
