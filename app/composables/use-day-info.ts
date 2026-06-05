import { useFetch } from "nuxt/app";
import type { DateInfo } from "@/types";

export const useDayInfo = async (dateInfo: DateInfo) => {
  const { day, month } = dateInfo;

  const { data } = await useFetch(
    () => `/api/day-events?month=${month}&day=${day}`,
  );
  return { dayInfo: data };
};
