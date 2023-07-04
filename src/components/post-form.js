import {
	Button,
	FormControl,
	FormHelperText,
	HStack,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useAuthInfo } from "@propelauth/react";
import { useState } from "react";
import axios from "axios";
import sanitize from "mongo-sanitize";

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
		const clean = sanitize(content);
		const res = await axios.post("/api/publish-post", {
			username,
			content: clean,
		});
		setContent("");
	};

	const handleKeyDown = (e) => {
		// Check if the user pressed Cmd+Enter on Mac or Ctrl+Enter on Windows
		if ((e.metaKey || e.ctrlKey) && (e.key === "Enter" || e.keyCode === 13)) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	return (
		<FormControl my={4} as="form" isInvalid={error}>
			<Textarea
				placeholder="Here is a sample placeholder"
				value={content}
				onChange={(e) => handleChange(e)}
				maxLength={5000}
				onKeyDown={handleKeyDown}
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
