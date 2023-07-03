import {
	Avatar as ChakraAvatar,
	Card,
	CardBody,
	HStack,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import Avatar, { genConfig } from "react-nice-avatar";

export default ({ username, content }) => {
	const config = genConfig(username);

	return (
		<Card
			w="full"
			shadow="none"
			border="1px"
			borderColor="gray.200"
			rounded="none"
			borderTop={0}
			pb={4}
		>
			<CardBody>
				<HStack alignItems="start">
					<ChakraAvatar as={Avatar} />
					<VStack alignItems="start" spacing={2}>
						<Heading size="sm">{username}</Heading>
						<Text>{content}</Text>
					</VStack>
				</HStack>
			</CardBody>
		</Card>
	);
};
