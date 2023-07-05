import { Text, VStack } from "@chakra-ui/react";
import Post from "./post";
import _ from "lodash";
import { useEffect, useState } from "react";

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [loadingPosts, setLoadingPosts] = useState(true);

	const getPosts = async () => {
		const res = await fetch("/api/get-posts");

		if (res.status === 200) {
			const json = await res.json();
			const _posts = json;

			setPosts(_posts);
		} else if (res.status === 500) {
			console.error("Failed to fetch posts");
		}

		setLoadingPosts(false);
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<VStack spacing={0} borderTop="1px" borderColor="gray.300">
			{loadingPosts ? (
				<Text>Loading...</Text>
			) : posts ? (
				_.map(posts, ({ _id, username, content }) => (
					<Post key={_id} username={username} content={content} />
				))
			) : (
				<Text>No posts yet</Text>
			)}
		</VStack>
	);
};

export default Feed;
