export const getDayActionsDate = (date: Date) => {
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);

  const previousDay = new Date(date);
  previousDay.setDate(previousDay.getDate() - 1);

  return {
    nextDay: {
      day: nextDay.getDate(),
      month: nextDay.getMonth(),
      year: nextDay.getFullYear(),
    },
    previousDay: {
      day: previousDay.getDate(),
      month: previousDay.getMonth(),
      year: previousDay.getFullYear(),
    },
  };
};
