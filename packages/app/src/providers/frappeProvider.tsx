/**
 * External dependencies.
 */
import { type ReactNode } from 'react';

import { FrappeProvider as _FrappeProvider } from 'frappe-react-sdk';
/**
 * Internal dependencies.
 */
import { getSiteName, enableSocket } from '../utils';

const FrappeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<_FrappeProvider
			url={import.meta.env.VITE_BASE_URL ?? ''}
			socketPort={import.meta.env.VITE_SOCKET_PORT}
			enableSocket={enableSocket()}
			siteName={getSiteName()}
		>
			{children}
		</_FrappeProvider>
	);
};

export default FrappeProvider;
