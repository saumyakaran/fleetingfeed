import { VStack } from "@chakra-ui/react";
import Post from "./post";
import _ from "lodash";
import { useEffect, useState } from "react";

export default () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch("/api/get-posts");
			const _posts = await res.json();
			setPosts(_posts);
		};
		getPosts();
	}, []);

	return (
		<VStack spacing={0} borderTop="1px" borderColor="gray.300">
			{_.map(posts, ({ username, content }) => (
				<Post username={username} content={content} />
			))}
		</VStack>
	);
};
