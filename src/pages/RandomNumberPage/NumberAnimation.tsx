import "./NumberAnimation.css"; // Import your custom styles

const NumberAnimation = (props: {
  numbers: number[];
  isAnimating: boolean;
}) => {
  return (
    <div className={`text-7xl ${props.isAnimating ? "showAn" : ""}`}>
      <div className="flex flex-row gap-2">
        {props.numbers.map((x) => {
          return <div>{x}</div>;
        })}
      </div>
    </div>
  );
};

export default NumberAnimation;
