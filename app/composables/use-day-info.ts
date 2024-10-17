import { useFetch } from "nuxt/app";
import type { DateInfo } from "@/types";

export const useDayInfo = async (dateInfo: DateInfo) => {
  const { day, month, year } = dateInfo;

  const { data } = await useFetch(
    () => `/api/day-events?year=${year}&month=${month}&day=${day}`
  );
  return { dayInfo: data };
};
