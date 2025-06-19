'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const PlusMinusButton = ({ caseType, className }: { caseType: string; className?: string }) => {
  const [count, setCount] = useState(1);

  const limits = {
    rooms: { min: 1, max: 10 },
    wc: { min: 1, max: 5 },
    default: { min: 1, max: 99 },
  };

  const format = {
    rooms: (v: number) => (v === 1 ? "1-комнатная" : `${v}-комнатная`),
    wc: (v: number) => (v === 1 ? "1-санузел" : `${v}-санузла`),
    default: (v: number) => v.toString(),
  };

  const min = limits[caseType as keyof typeof limits]?.min ?? limits.default.min;
  const max = limits[caseType as keyof typeof limits]?.max ?? limits.default.max;

  const handleDecrement = () => setCount(Math.max(min, count - 1));
  const handleIncrement = () => setCount(Math.min(max, count + 1));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/\D/g, ""), 10);
    if (!isNaN(value)) {
      setCount(Math.min(max, Math.max(min, value)));
    }
  };

  return (
    <div className={`${className} flex items-center gap-2 border rounded-sm w-fit h-[38px]`}>
      <Button onClick={handleDecrement} variant="outline" className="border-0 w-[50px] rounded-sm" disabled={count <= min}>
        -
      </Button>
      <Input
        type="text"
        value={format[caseType as keyof typeof format]?.(count) ?? count}
        onChange={handleChange}
        className="text-center border-x border-y-0 h-[36px] w-[130px] px-2 rounded-none focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-0"
      />
      <Button onClick={handleIncrement} variant="outline" className="border-0 w-[50px] rounded-sm">
        +
      </Button>
    </div>
  );
};

export default PlusMinusButton;
