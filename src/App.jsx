import InputItem from "./components/input/InputItem";
import Button from "./ui/Button";
import Results from "./components/results/Results";
import useCalculatorStore from "./store";

function App() {
  const {
    day,
    month,
    year,
    setDay,
    setMonth,
    setYear,
    isSubmitted,
    isValidDate,
  } = useCalculatorStore();

  return (
    <main className="grid w-[calc(100vw-1.875rem)] max-w-[52.5rem] place-items-center rounded-[1.625rem] rounded-br-[6rem] bg-white px-6 py-[3.125rem] selection:bg-purple selection:text-white md:rounded-[1.375rem] md:rounded-br-[13rem] md:p-14">
      <form onSubmit={(e) => e.preventDefault()} noValidate className="w-full">
        <section className="grid grid-cols-3 gap-x-4 md:w-[34rem] md:gap-x-8">
          <InputItem
            name="day"
            placeholder="DD"
            onChange={(e) => setDay(e.target.value)}
            value={day}
          />
          <InputItem
            name="month"
            placeholder="MM"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
          />
          <InputItem
            name="year"
            placeholder="YYYY"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />

          {isSubmitted &&
            day &&
            month &&
            year &&
            !isValidDate(day, month, year) && (
              <span className="col-span-full mt-1.5 text-sm italic text-light-red selection:bg-light-red md:mt-2">
                Must be a valid date
              </span>
            )}
        </section>

        <div className="relative mb-9 mt-8 w-full text-center md:mb-1.5 md:mt-0 md:text-right">
          <hr className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border-light-gray" />
          <Button />
        </div>

        <Results />
      </form>
    </main>
  );
}

export default App;
