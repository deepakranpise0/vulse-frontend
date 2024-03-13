'use client';

import React, {
  useEffect,
  useState,
} from 'react';

import { usePathname } from 'next/navigation';

const HeaderName = () => {
    const router = usePathname();
	const [activeRoute, setActiveRoute] = useState<string>('');
    useEffect(() => {		
        const url = router.split('/')[1];
        setActiveRoute(url.toLocaleUpperCase());
		}, [router]);

	return (
		<header className="bg-white shadow">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					{activeRoute}
				</h1>
			</div>
		</header>
	);
};

export default HeaderName;
