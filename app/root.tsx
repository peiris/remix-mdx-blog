import type {
	LinksFunction,
	MetaFunction,
	LoaderFunction,
} from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";

import type { Theme } from "~/utils/theme-provider";
import {
	NonFlashOfWrongThemeEls,
	ThemeProvider,
	useTheme,
} from "~/utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";
import Footer from "~/components/atoms/Footer";
import Header from "~/components/atoms/Header";

import stylesheet from "~/styles/tailwind.css";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;700&family=Inter:wght@400;600&display=swap",
	},
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css",
		crossOrigin: "anonymous",
	},
];

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "New Remix App",
	viewport: "width=device-width,initial-scale=1",
});

export type LoaderData = {
	theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
	const themeSession = await getThemeSession(request);

	const data: LoaderData = {
		theme: themeSession.getTheme(),
	};

	return data;
};

function App() {
	const data = useLoaderData<LoaderData>();

	const [theme] = useTheme();

	return (
		<html lang="en" className={clsx(theme)}>
			<head>
				<Meta />
				<Links />
				<NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
			</head>
			<body className="bg-background text-text-primary dark:bg-d-background dark:text-d-text-primary">
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="relative mx-auto my-0 box-border flex w-full max-w-7xl flex-[1] flex-grow flex-col px-[2em] py-[1em]">
						<Outlet />
					</main>
					<Footer />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export default function AppWithProviders() {
	const data = useLoaderData<LoaderData>();

	return (
		<ThemeProvider specifiedTheme={data.theme}>
			<App />
		</ThemeProvider>
	);
}
