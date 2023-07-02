import {
	Avatar,
	Box,
	HStack,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useAuthInfo, useLogoutFunction } from "@propelauth/react";
import { FiLogOut } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

export default () => {
	const {
		user: { username, email },
	} = useAuthInfo();
	const logoutFn = useLogoutFunction();
	return (
		<Box py={2} px={8} maxW="8xl">
			<HStack justifyContent="end">
				<Menu>
					<MenuButton as={Box} cursor="pointer">
						<HStack
							spacing={2}
							border="1px"
							bg="white"
							rounded="lg"
							px={4}
							py={2}
						>
							<Avatar name={username} src="" />
							<VStack alignItems="start" spacing={0}>
								<Text>{username}</Text>
								<Text fontSize="xs">{email}</Text>
							</VStack>
						</HStack>
					</MenuButton>
					<MenuList>
						<MenuItem
							icon={<FiLogOut />}
							fontWeight="medium"
							onClick={() => logoutFn(true)}
						>
							Logout
						</MenuItem>
						<MenuDivider />
						<MenuItem
							as="a"
							icon={<BiSupport />}
							href="mailto:contact@saumyakaran.com"
							_hover={{ "text-decoration": "none" }}
						>
							Help
						</MenuItem>
					</MenuList>
				</Menu>
			</HStack>
		</Box>
	);
};
