import { Button, FormControl, Textarea } from "@chakra-ui/react";

export default () => {
	return (
		<FormControl my={4} as="form">
			<Textarea placeholder="Here is a sample placeholder" />
            <Button my={4} type="submit">Rage</Button>
		</FormControl>
	);
};
