import { useEffect, useState } from "react";

const useRandomNumber = (
  fromNumber: number | undefined,
  toNumber: number | undefined,
  numbers: number,
  instance: boolean = true
) => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const doRoll = () => {
    if (
      fromNumber == null ||
      toNumber == null ||
      toNumber == 0 ||
      fromNumber == 0 ||
      fromNumber >= toNumber
    ) {
      return;
    }
    const rngNumber: number =
      Math.floor(Math.random() * (toNumber - fromNumber + 1)) + fromNumber;
    setRandomNumbers((prev) => [...prev, rngNumber]);
  };
  const MakingNumbers = () => {
    setRandomNumbers([]);
    for (let i = 0; i < numbers; i++) {
      doRoll();
    }
    instance = false;
  };

  useEffect(() => {
    if (instance) MakingNumbers();
  }, [instance]);

  return { randomNumbers, MakingNumbers };
};
export default useRandomNumber;
