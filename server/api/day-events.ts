import { DateInfoSchema } from "@/schemas/date-info";
import { DayInfoSchema } from "@/schemas/day-info";
import { getDayInfo, saveDayInfo } from "@/supabase";

const getDayEvents = defineCachedFunction(
  async (year: number, month: number, day: number) => {
    const eventKey = `${year}-${month}-${day}`;

    const dayInfo = await getDayInfo(eventKey);

    if (dayInfo.data) {
      const dbDayEvents = DayInfoSchema.parse({
        is_holiday: dayInfo.data.is_holiday,
        events: JSON.parse(dayInfo.data.events),
      });
      return dbDayEvents;
    }

    const dayEventsResponse = await $fetch(
      `https://holidayapi.ir/jalali/${year}/${month}/${day}`
    );
    const dayEvents = DayInfoSchema.parse(dayEventsResponse);
    await saveDayInfo(eventKey, dayEvents);
    return dayEvents;
  },
  {
    getKey: async (year: number, month: number, day: number) =>
      `${year}-${month}-${day}`,
    maxAge: Number.MAX_SAFE_INTEGER,
  }
);

export default defineCachedEventHandler(
  async (event) => {
    const params = getQuery(event);
    const { year, month, day } = DateInfoSchema.parse(params);
    const dayEvents = await getDayEvents(year, month, day);

    return dayEvents;
  },
  {
    maxAge: Number.MAX_SAFE_INTEGER,
  }
);
