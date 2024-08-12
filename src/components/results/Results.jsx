import useCalculatorStore from "../../store";
import ResultsItem from "./ResultsItem";

function Results() {
  const { age } = useCalculatorStore();

  return (
    <section className="space-y-1.5 place-self-start">
      <ResultsItem value={age.years} name="years" />
      <ResultsItem value={age.months} name="months" />
      <ResultsItem value={age.days} name="days" />
    </section>
  );
}

export default Results;
