import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Card, CardHeader, CardTitle, CardContent, Tabs, TabsList, TabsTrigger, TabsContent } from '@frappe-ui-react-starter/design-system';

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className="max-w-7xl m-auto min-h-screen flex flex-col items-center justify-center gap-8 p-8">
			<div className="flex gap-5">
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo h-16 w-16" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react h-16 w-16"
						alt="React logo"
					/>
				</a>
			</div>
			<h1 className="text-4xl font-bold">Frappe UI React Starter</h1>
			
			<Card className="w-96">
				<CardHeader>
					<CardTitle>Component Demo</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col items-center gap-4">
						<Button onClick={() => setCount((count) => count + 1)}>
							Count is {count}
						</Button>
						<div className="flex gap-2">
							<Button variant="primary" size="sm">Primary</Button>
							<Button variant="secondary" size="sm">Secondary</Button>
							<Button variant="outline" size="sm">Outline</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Tabs defaultValue="tab1" className="w-96">
				<TabsList>
					<TabsTrigger value="tab1">Features</TabsTrigger>
					<TabsTrigger value="tab2">Getting Started</TabsTrigger>
					<TabsTrigger value="tab3">About</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">
					<p className="text-gray-600">
						This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
					</p>
				</TabsContent>
				<TabsContent value="tab2">
					<p className="text-gray-600">
						Edit <code>src/App.tsx</code> and save to test HMR. Click on the Vite and React logos to learn more.
					</p>
				</TabsContent>
				<TabsContent value="tab3">
					<p className="text-gray-600">
						Built with ❤️ using Vite, React, and a minimal custom design system.
					</p>
				</TabsContent>
			</Tabs>
		</main>
	);
}

export default App;
