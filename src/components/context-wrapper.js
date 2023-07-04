import { ChakraProvider } from "@chakra-ui/react";
import { RequiredAuthProvider } from "@propelauth/react";

const ContextWrapper = ({ children }) => (
	<RequiredAuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL}>
		<ChakraProvider>{children}</ChakraProvider>
	</RequiredAuthProvider>
);

export default ContextWrapper;
