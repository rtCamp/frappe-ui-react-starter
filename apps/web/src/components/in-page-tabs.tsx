import {
	Tabs,
	TabsList,
	TabsTrigger,
	TabsContent,
} from '@react-skeleton/ui/tabs';

export default function InPageTabs() {
	return (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="account" variant="default">
					Account
				</TabsTrigger>
				<TabsTrigger value="password" variant="ghost">
					Password
				</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<p className="p-4">Manage your account settings here.</p>
			</TabsContent>
			<TabsContent value="password">
				<p className="p-4">Change your password here.</p>
			</TabsContent>
		</Tabs>
	);
}
