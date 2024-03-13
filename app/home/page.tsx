'use client';
import React from 'react';

import { useQuizData } from '../api/api';
import QuizTable from '../components/QuizTable';
import { withAuth } from '../hoc/withAuth';

const Page: React.FC = () => {
	const { data: quizzes, isLoading, isError } = useQuizData();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	if (isError) {
		return <div>Error fetching quizzes.</div>;
	}
	return (
		<div>
			<QuizTable quizzes={quizzes ?? []} />
		</div>
	);
};

export default withAuth(Page);
