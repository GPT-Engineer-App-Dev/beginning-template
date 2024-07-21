import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Calculator = () => {
  const [result, setResult] = useState(null);

  const calculate = () => {
    setResult(2 + 2);
  };

  return (
    <Card className="w-[300px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Simple Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button onClick={calculate} className="w-full">
            Calculate 2 + 2
          </Button>
          {result !== null && (
            <p className="text-center text-2xl font-bold">
              Result: {result}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calculator;