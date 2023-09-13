import { useEffect, useState } from "react";

const NumberDrawing = (numbers: number[]) => {
  const [currentNumber, setCurrentNumber] = useState<number>();
  const [i, setI] = useState<number>(-1);
  const [winNumber, setWinNumber] = useState<number>(
    numbers[numbers.length - 1]
  );

  useEffect(() => {
    setWinNumber(numbers[numbers.length - 1]);
  }, [numbers]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (i < numbers.length - 1) {
        setI((prev) => prev + 1);
        setCurrentNumber(numbers[i + 1]);
      } else {
        clearInterval(interval);
      }
    }, 100 + i * 20);

    return () => clearInterval(interval);
  }, [numbers, i]);

  return { currentNumber, setI, winNumber, i };
};

export default NumberDrawing;
