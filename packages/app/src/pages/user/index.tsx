/**
 * External dependencies.
 */
import { ListView, Avatar } from '@rtcamp/frappe-ui-react';
import { useFrappeGetDocList } from 'frappe-react-sdk';

interface RowType {
	full_name: string
	user_image: string
	email: string
	id: string
}

const User = () => {
	const { data, error, isLoading } = useFrappeGetDocList('User', {
		fields: ['*'],
	});

	if ( error ) {
		return <p>There was an error loading..</p>;
	}

    if (isLoading) {
        return <p>Loading...</p>;
    }

	if ( ! data || data.length === 0 ) {
		return <p>No users found.</p>;
	}

	return (
		<ListView
			columns={[
				{
					label: 'Full Name',
					key: 'full_name',
					width: 3,
					getLabel: ({ row }: { row: RowType } ) => row.full_name,
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
			rows={data}
		/>
	);
	
};

export default User;
