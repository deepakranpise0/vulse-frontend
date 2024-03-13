'use client'
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuBar: React.FC = () => {
	const pathname = usePathname();
	// function logout() {
	// 	localStorage.removeItem('token');
	// }

	return (
		<div className="navbar bg-sky-200 px-20">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link
								className={`link ${pathname === '/users' ? 'active' : ''}`}
								href="/home"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/users' ? 'active' : ''}`}
								href="/users"
							>
								Users
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/quiz' ? 'active' : ''}`}
								href="/quiz"
							>
								Quiz
							</Link>
						</li>
						<li>
							<Link
								className={`link ${pathname === '/results' ? 'active' : ''}`}
								href="/results"
							>
								Results
							</Link>
						</li>
					</ul>
				</div>
				<Image
					src="/VulseLogo.jpg"
					alt="Vulse Assignment"
					height={100}
					width={100}
				/>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link
							className={`link ${pathname === '/home' ? 'active' : ''}`}
							href="/home"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`link  ${pathname === '/users' ? 'active' : ''}`}
							href="/users"
						>
							Users
						</Link>
					</li>
					<li>
						<Link
							className={`link ${pathname === '/quiz' ? 'active' : ''}`}
							href="/quiz"
						>
							Quiz
						</Link>
					</li>
					<li>
						<Link
							className={`link ${pathname === '/results' ? 'active' : ''}`}
							href="/results"
						>
							Results
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="avatar online placeholder">
							<div className="bg-neutral text-neutral-content rounded-full w-10">
								<span className="text-xl">AI</span>
							</div>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
