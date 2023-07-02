export const metadata = {
	title: "Rage On Twitter",
	description: "Free speech should not be rate limited.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
