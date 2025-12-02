/**
 * External dependencies.
 */
import React from 'react';
import { Button } from '@rtcamp/frappe-ui-react';

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className = '' }: CardProps) {
	return (
		<div
			className={`rounded-lg border bg-white p-6 shadow-sm ${className}`}
		>
			{children}
		</div>
	);
}

interface CardHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
	return (
		<div className={`flex flex-col space-y-1.5 pb-6 ${className}`}>
			{children}
		</div>
	);
}

interface CardTitleProps {
	children: React.ReactNode;
	className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
	return (
		<h3
			className={`text-lg font-semibold leading-none tracking-tight ${className}`}
		>
			{children}
		</h3>
	);
}

interface CardContentProps {
	children: React.ReactNode;
	className?: string;
	showTestButton?: boolean;
}

export function CardContent({
	children,
	className = '',
	showTestButton = true,
}: CardContentProps) {
	return (
		<div className={`pt-0 flex flex-col gap-4 ${className}`}>
			{children}
			{showTestButton && <Button variant="solid">Test Button</Button>}
		</div>
	);
}
