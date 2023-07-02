const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

let clientPromise;

if (process.env.NODE_ENV !== "production") {
	if (!global._mongoClientPromise) {
		let client = new MongoClient(URI, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	clientPromise = await client.connect();
}

export default clientPromise;
