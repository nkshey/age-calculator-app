import useCalculatorStore from "../../store";

const today = new Date().getFullYear();

function InputItem({ name, placeholder, onChange, value }) {
  const { isSubmitted, isValidDate, day, month, year } = useCalculatorStore();
  const isValidForStyle =
    isSubmitted && day && month && year && !isValidDate(day, month, year);

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (name === "day" && newValue >= 0 && newValue <= 31) {
      onChange(e);
    } else if (name === "month" && newValue >= 0 && newValue <= 12) {
      onChange(e);
    } else if (name === "year" && newValue >= 0 && newValue <= today) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className={`mb-1.5 text-xs font-bold uppercase tracking-[.25em] text-smoke-gray md:mb-2.5 md:text-sm ${isSubmitted && !value && "!text-light-red"} ${isValidForStyle && "!text-light-red"}`}
      >
        {name}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        type="tel"
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={name === "year" ? 4 : 2}
        className={`h-[3.375rem] cursor-pointer rounded-lg border border-light-gray px-3.5 text-xl font-bold placeholder-smoke-gray/80 caret-purple focus:border-purple focus:outline-none md:h-[4.5rem] md:px-[1.375rem] md:text-[2rem] ${isSubmitted && !value && "border-light-red"} ${isValidForStyle && "border-light-red"}`}
        value={value}
        onChange={handleChange}
        required
      />
      {isSubmitted && !value && (
        <span className="mt-1.5 text-[0.5rem] italic text-light-red selection:bg-light-red md:mt-2 md:text-sm">
          This field is required
        </span>
      )}
    </div>
  );
}

export default InputItem;
