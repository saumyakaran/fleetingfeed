import {
	Button,
	FormControl,
	FormHelperText,
	HStack,
	Textarea,
} from "@chakra-ui/react";
import { isError, set } from "lodash";
import { useEffect, useState } from "react";

const max_chars = 280;

export default () => {
	const [charsLeft, setCharsLeft] = useState(max_chars);
	const [error, setError] = useState(false);
	const handleChange = (e) => {
		let input = e.target.value;
		const _charsLeft = max_chars - input.length;
		setCharsLeft(_charsLeft);
		if (_charsLeft < 0) {
			setError(true);
		} else {
			setError(false);
		}
	};
	useEffect(() => {
		console.log(charsLeft);
	}, [charsLeft]);

	return (
		<FormControl my={4} as="form" isInvalid={error}>
			<Textarea
				placeholder="Here is a sample placeholder"
				onChange={(e) => handleChange(e)}
				maxLength={5000}
			/>
			<HStack justifyContent="space-between" alignItems="start">
				<FormHelperText>{280 - charsLeft}/280 characters</FormHelperText>
				<Button
					my={4}
					px={8}
					colorScheme="twitter"
					type="submit"
					isDisabled={error}
				>
					Rage
				</Button>
			</HStack>
		</FormControl>
	);
};
