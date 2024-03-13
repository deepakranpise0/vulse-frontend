'use client';

import React from 'react';

import { useUsersData } from '../api/api';
import ResponsiveTable from '../components/ResponsiveTable';
import { withAuth } from '../hoc/withAuth';

const Page: React.FC = () => {
	const { data: users, isLoading, isError } = useUsersData();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error fetching users....</div>;
	}

	return (
		<div>
			<ResponsiveTable users={users??[]} />
		</div>
	);
};

Page.propTypes = {};

export default withAuth(Page);
