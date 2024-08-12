import { create } from "zustand";

const initialState = {
  day: "",
  month: "",
  year: "",
  age: { days: null, months: null, years: null },
  isSubmitted: false,
};

const useCalculatorStore = create((set, get) => ({
  ...initialState,

  setDay: (day) => set({ day }),
  setMonth: (month) => set({ month }),
  setYear: (year) => set({ year }),

  isValidDate: (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === parseInt(year) &&
      date.getMonth() === month - 1 &&
      date.getDate() === parseInt(day)
    );
  },

  calculateAge: () => {
    const { day, month, year, isValidDate } = get();

    if (!day || !month || !year || !isValidDate(day, month, year)) {
      set({ isSubmitted: true });
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) return;

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    set({
      age: { days: ageDays, months: ageMonths, years: ageYears },
      isSubmitted: false,
    });
  },
}));

export default useCalculatorStore;
