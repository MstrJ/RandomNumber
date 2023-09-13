import useRandomNumber from "../../hooks/useRandomNumber";
import NumberDrawing from "./NumberDrawing";
import { useState } from "react";
type FromToNumber = {
  From: number | undefined | string;
  To: number | undefined | string;
};

function RandomNumberComponent() {
  const [fromToNumber, setFromToNumber] = useState<FromToNumber>({
    From: "",
    To: "",
  });
  const maxNumbers: number = 16;
  const { randomNumbers, MakingNumbers } = useRandomNumber(
    Number(fromToNumber.From),
    Number(fromToNumber.To),
    maxNumbers,
    false
  );
  const { currentNumber, setI, i } = NumberDrawing(randomNumbers);
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="mx-10 my-2 flex flex-col items-center justify-center text-center">
      <div
        className={`text-[174px] mb-6 ${
          i == maxNumbers - 1 ? "text-red-600" : ""
        }`}
      >
        {currentNumber == null
          ? "-"
          : randomNumbers.length == 0
          ? "-"
          : currentNumber}
      </div>
      <button
        className="text-5xl text-white border-2 hover:bg-white hover:text-neutral-900  duration-200 border-white rounded-lg py-1 px-3 w-max mt-4 "
        onClick={() => {
          if (fromToNumber.From != null && fromToNumber.To != null) {
            console.log(fromToNumber.From, fromToNumber.To);
            MakingNumbers();
            setI(-1);
            setIsAnimating(!isAnimating);
          }
        }}
      >
        Roll
      </button>

      <div className="flex flex-row gap-5 justify-center mt-10">
        <input
          type="number"
          name="from"
          onChange={(e) => {
            setFromToNumber((prev) => ({
              To: prev.To,
              From: e.target.value,
            }));
          }}
          value={fromToNumber.From}
          placeholder="From"
          className="input"
          inputMode="numeric"
        />
        <input
          type="number"
          name="to"
          onChange={(e) => {
            setFromToNumber((prev) => ({
              To: e.target.value,
              From: prev.From,
            }));
          }}
          value={fromToNumber.To}
          placeholder="To"
          className="input"
          inputMode="numeric"
        />
      </div>
    </div>
  );
}

export default RandomNumberComponent;
