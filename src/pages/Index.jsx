import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application. Start building your content here.</p>
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;