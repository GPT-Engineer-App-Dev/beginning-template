import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SimpleCalculation = () => {
  const result = 2 + 2;

  return (
    <Card className="w-[300px] mx-auto mt-10">
      <CardHeader>
        <CardTitle>Simple Calculation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-2xl">
          2 + 2 = <span className="font-bold">{result}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default SimpleCalculation;