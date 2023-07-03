import {
	Button,
	FormControl,
	FormHelperText,
	HStack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useAuthInfo } from "@propelauth/react";
import { isError, set } from "lodash";
import { useEffect, useState } from "react";
import axios from "axios";

const max_chars = 280;

export default () => {
	const {
		user: { username },
	} = useAuthInfo();

	const [content, setContent] = useState("");
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
		setContent(input);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post("/api/publish-post", { username, content });
		console.log(res);
		setContent("");
	};

	return (
		<FormControl my={4} as="form" isInvalid={error}>
			<Textarea
				placeholder="Here is a sample placeholder"
				value={content}
				onChange={(e) => handleChange(e)}
				maxLength={5000}
			/>
			<HStack justifyContent="space-between" alignItems="start">
				<FormHelperText>
					<Text
						as="span"
						color={error && "red.500"}
						fontWeight={error && "bold"}
					>
						{280 - charsLeft}
					</Text>
					/280 characters
				</FormHelperText>
				<Button
					my={4}
					px={8}
					colorScheme="twitter"
					// type="submit"
					isDisabled={error || charsLeft === 280}
					onClick={(e) => handleSubmit(e)}
				>
					Rage
				</Button>
			</HStack>
		</FormControl>
	);
};
