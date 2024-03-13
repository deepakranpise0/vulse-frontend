// ResponsiveTable.tsx

import React from 'react';

import { useRouter } from 'next/navigation';

const apiUrl = process.env.API_URL;

const QuizTable: React.FC<QuizProps> = ({ quizzes: quizzes }) => {
	const router = useRouter();
	const token = localStorage.getItem('token');
	const attemptQuiz = (id: number) => {
		router.push(`/home/${id}`);
	};

	const deleteQuiz = async (id: number) => {
		try {
			await fetch(`${apiUrl}quizzes/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			alert('Quiz deleted.');
			router.push('/home');
		} catch (error) {
			console.error('Error deleting quiz:', error);
			alert('Failed to delete quiz');
		}
	};

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white">
				<thead>
					<tr>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Id
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Title
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Questions
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Date
						</th>
						<th className="border-b border-gray-200 bg-gray-100 text-left px-6 py-3 text-xs uppercase font-semibold text-gray-600 tracking-wider">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{quizzes.map((quiz) => (
						<tr key={quiz.id}>
							<td className="border-b text-red-500 border-gray-200 px-6 py-4 whitespace-nowrap">
								{quiz.id}
							</td>
							<td className="border-b  text-red-500  border-gray-200 px-6 py-4 whitespace-nowrap">
								{quiz.title}
							</td>
							<td className="border-b  text-red-500  border-gray-200 px-6 py-4 whitespace-nowrap">
								{quiz.questions.length}
							</td>
							<td className="border-b  text-red-500  border-gray-200 px-6 py-4 whitespace-nowrap">
								{quiz.createdAt}
							</td>
							<td className="border-b  border-gray-200 px-6 py-4 whitespace-nowrap">
								<div className="relative inline-block">
									<button
										className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-semibold py-1 px-2 rounded-full shadow-sm"
										onClick={() => attemptQuiz(quiz.id)}
									>
										Attempt
									</button>
								</div>
								<div className="relative inline-block">
									<button
										className="bg-pink-100 hover:bg-pink-200 text-pink-600 font-semibold py-1 px-2 rounded-full shadow-sm"
										onClick={() => deleteQuiz(quiz.id)}
									>
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default QuizTable;
