import React from 'react';

interface Props {
	userResults: QuizResultResponse[]; // Users prop of type User[]
}

const ResultTable: React.FC<Props> = ({ userResults }) => {
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
							Quiz Name
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Score
						</th>
					</tr>
				</thead>
				<tbody>
					{userResults.map((userResult) => (
						<tr key={userResult.id}>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{userResult.id}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{userResult.user.username}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{userResult.quiz.title}
							</td>
							<td className="border-b border-gray-200 px-6 py-4 whitespace-nowrap">
								{userResult.score}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ResultTable