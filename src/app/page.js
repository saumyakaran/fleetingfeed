"use client";

import RootLayout from "@/app/layout";
import ContextWrapper from "../components/context-wrapper";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import PostForm from "@/components/post-form";
import Feed from "@/components/feed";

export default function Wrapper() {
	return (
		<RootLayout>
			<ContextWrapper>
				<Navbar />
				<Box py={8} px={8} mx="auto" maxW="xl">
					<Heading>Hello, world!</Heading>
					<PostForm />
					<Feed />
				</Box>
			</ContextWrapper>
		</RootLayout>
	);
}
