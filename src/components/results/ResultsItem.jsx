function ResultsItem({ value, name }) {
  return (
    <div className="flex gap-2.5 text-[3.375rem] font-extrabold italic leading-none tracking-tight md:gap-3 md:text-[6.156rem]">
      <span className="text-purple">{value === null ? "- -" : value}</span>
      <p>{name}</p>
    </div>
  );
}

export default ResultsItem;
