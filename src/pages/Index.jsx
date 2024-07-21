import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    setGreeting(`Hello, ${name || 'there'}!`);
  };

  return (
    <Card className="w-[300px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Greeting App</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleGreet} className="w-full">
            Greet
          </Button>
          {greeting && (
            <p className="text-center text-xl">{greeting}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Greeting;