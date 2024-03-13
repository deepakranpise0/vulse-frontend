// ResponsiveTable.tsx

import React from 'react';

interface User {
	id: number;
	username: string;
	email: string;
	role: String;
}

interface Props {
	users: User[]; // Users prop of type User[]
}

const ResponsiveTable: React.FC<Props> = ({ users }) => {
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white">
				<thead>
					<tr>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Id
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							User Name
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Email
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Role
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{user.id}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{user.username}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{user.email}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{user.role}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ResponsiveTable;
