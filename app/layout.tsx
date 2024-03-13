'use client';

import './globals.css';

import React, { useState } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {
  usePathname,
  useRouter,
} from 'next/navigation';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import HeaderName from './components/HeaderName';
import MenuBar from './components/MenuBar';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isAuthenticated, setAuth] = useState<boolean>();
	const router = useRouter();
	const pathName = usePathname();

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setAuth(true);
		}
	}, [isAuthenticated, pathName, router]);
	return (
		<QueryClientProvider client={queryClient}>
			<html lang="en" data-theme="cupcake">
				<body className={inter.className}>
					<div className="min-h-full">
						{isAuthenticated && <MenuBar />}
						<main>
							{isAuthenticated && <HeaderName />}
							<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
								{children}
							</div>
						</main>
					</div>
				</body>
			</html>
		</QueryClientProvider>
	);
}