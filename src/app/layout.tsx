import type { Metadata } from "next";
import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Topbar from "@/components/topbar/Topbar";

export const metadata: Metadata = {
	title: "Teste técnico - Legaplan",
	description: "...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>
				<Topbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
