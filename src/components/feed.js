import { Box, VStack } from "@chakra-ui/react";
import Post from "./post";
import _ from "lodash";
import { useEffect, useState } from "react";

export default () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/posts");
			const data = await res.json();
			setPosts(data);
		};
		getPosts();
	}, []);

	return (
		<VStack spacing={0} borderTop="1px" borderColor="gray.300">
			{_.map(posts, (res) => (
				<Post username={"name"} content={"content"} />
			))}
		</VStack>
	);
};
