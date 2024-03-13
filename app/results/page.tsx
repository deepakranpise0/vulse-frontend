'use client'
import React from 'react';

import { useResultsData } from '../api/api';
import ResultTable from '../components/ResultTable';
import { withAuth } from '../hoc/withAuth';

const Page: React.FC = () => {
	const { data: results, isLoading, isError } = useResultsData();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error fetching users results....</div>;
	}
	return <ResultTable userResults={results??[]} />;
};

export default withAuth(Page);
