/**
 * External dependencies.
 */
import { ListView, Avatar } from '@rtcamp/frappe-ui-react';
import { useFrappeGetDocList } from 'frappe-react-sdk';

interface RowType {
	full_name: string;
	user_image: string;
	email: string;
	id: string;
}

const dummyUsers = [
	{
		id: '1',
		full_name: 'John Doe',
		email: 'john@doe.com',
		user_image: 'https://randomuser.me/api/portraits/men/59.jpg',
	},
	{
		id: '2',
		full_name: 'Jane Smith',
		email: 'jane@smith.com',
		user_image: 'https://randomuser.me/api/portraits/women/59.jpg',
	},
	{
		id: '3',
		full_name: 'John Wayne',
		email: 'john@wayne.com',
		user_image: 'https://randomuser.me/api/portraits/men/57.jpg',
	},
];

const User = () => {
	const { data, error, isLoading } = useFrappeGetDocList('User', {
		fields: ['*'],
	});

	const users = error ? dummyUsers : data;

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!users || users.length === 0) {
		return <p>No users found.</p>;
	}

	return (
		<ListView
			columns={[
				{
					label: 'Full Name',
					key: 'full_name',
					width: 3,
					getLabel: ({ row }: { row: RowType }) => row.full_name,
					prefix: ({ row }: { row: RowType }) => (
						<Avatar
							shape="circle"
							image={row.user_image}
							size="sm"
							label={row.full_name}
						/>
					),
				},
				{
					key: 'email',
					label: 'Email',
					width: '200px',
				},
			]}
			options={{
				emptyState: {
					description: 'Create a new record to get started',
					title: 'No records found',
				},
				options: {
					resizeColumn: true,
					selectable: true,
					showTooltip: true,
				},
			}}
			rowKey="id"
			rows={users}
		/>
	);
};

export default User;
