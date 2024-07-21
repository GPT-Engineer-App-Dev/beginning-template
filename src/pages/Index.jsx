import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(1 + 1);
  };

  return (
    <Card className="w-[300px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Simple Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input type="text" value={result} readOnly />
          <Button onClick={handleAddition} className="w-full">
            Calculate 1 + 1
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;