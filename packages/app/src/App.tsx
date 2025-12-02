import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from '@frappe-ui-react-starter/design-system';
import User from './pages/user';

function App() {
	return (
		<main className="max-w-7xl m-auto min-h-screen flex flex-col items-center gap-8 p-8">
			<header className="flex flex-col items-center gap-8">
				<div className="flex gap-5">
					<a href="https://vite.dev" target="_blank">
						<img
							src={viteLogo}
							className="logo h-16 w-16"
							alt="Vite logo"
						/>
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
			</header>

			<section className="w-full max-w-4xl">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Component Demos
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card className="w-full">
						<CardHeader>
							<CardTitle>Card Component</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-600">
								This is a demo of the Card component from our
								design system. It includes a header, title, and
								content area.
							</p>
						</CardContent>
					</Card>

					<Card className="w-full">
						<CardHeader>
							<CardTitle>Tabs Component</CardTitle>
						</CardHeader>
						<CardContent showTestButton={false}>
							<Tabs defaultValue="tab1" className="w-full">
								<TabsList>
									<TabsTrigger value="tab1">
										Features
									</TabsTrigger>
									<TabsTrigger value="tab2">
										Getting Started
									</TabsTrigger>
									<TabsTrigger value="tab3">
										About
									</TabsTrigger>
								</TabsList>
								<TabsContent value="tab1">
									<p className="text-gray-600">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Sed do eiusmod tempor
										incididunt.
									</p>
								</TabsContent>
								<TabsContent value="tab2">
									<p className="text-gray-600">
										Ut enim ad minim veniam, quis nostrud
										exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat.
									</p>
								</TabsContent>
								<TabsContent value="tab3">
									<p className="text-gray-600">
										Duis aute irure dolor in reprehenderit
										in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur.
									</p>
								</TabsContent>
							</Tabs>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="w-full max-w-4xl">
				<h2 className="text-2xl font-semibold mb-4 text-center">
					User Page Demo
				</h2>
				<User />
			</section>
		</main>
	);
}

export default App;
