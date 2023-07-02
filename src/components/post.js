import {
	Avatar,
	Card,
	CardBody,
	HStack,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";

export default ({ username, content }) => (
	<Card
		w="full"
		shadow="none"
		border="1px"
		borderColor="gray.200"
		rounded="none"
		borderTop={0}
	>
		<CardBody>
			<HStack alignItems="start">
				<Avatar />
				<VStack alignItems="start" spacing={0}>
					<Heading size="sm">{username}</Heading>
					<Text>{content}</Text>
				</VStack>
			</HStack>
		</CardBody>
	</Card>
);
