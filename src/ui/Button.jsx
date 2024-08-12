import useCalculatorStore from "../store";

function Button() {
  const { calculateAge } = useCalculatorStore();

  return (
    <button
      onClick={calculateAge}
      className="relative rounded-full bg-purple p-[1.125rem] transition-colors duration-150 hover:bg-off-black focus:outline-offset-4 focus:outline-purple md:p-[1.625rem]"
    >
      <img
        src="./images/icon-arrow.svg"
        alt="arrow icon"
        className="w-[1.625rem] md:w-auto"
      />
    </button>
  );
}

export default Button;
