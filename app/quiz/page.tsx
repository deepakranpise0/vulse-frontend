'use client';
import React from 'react';

import QuizForm from '../components/CreateQuiz';
import { withAuth } from '../hoc/withAuth';

const page = () => {
	return (
		<div className="container mx-auto mt-8">
			<QuizForm />
		</div>
	);
};

export default withAuth(page);
