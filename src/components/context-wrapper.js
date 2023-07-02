import { ChakraProvider } from "@chakra-ui/react";
import { RequiredAuthProvider } from "@propelauth/react";

export default ({ children }) => (
	<RequiredAuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
		<ChakraProvider>{children}</ChakraProvider>
	</RequiredAuthProvider>
);
