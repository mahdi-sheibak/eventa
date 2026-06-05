import { DateInfoSchema } from "@/schemas/date-info";

import eventsData from "../events.json";

export default defineCachedEventHandler(
  async (event) => {
    const params = getQuery(event);
    const { month, day } = DateInfoSchema.parse(params);

    const events = eventsData["Persian Calendar"].filter(
      (event) => event.day === day && event.month === month,
    );

    const isHoliday = events.some((event) => Boolean(event.holiday));
    const eventsDay = events.map((event) => ({
      description: event.title,
      isHoliday: Boolean(event.holiday),
    }));

    const dayEvents = {
      isHoliday,
      events: eventsDay,
    };

    return dayEvents;
  },
  {
    maxAge: Number.MAX_SAFE_INTEGER,
  },
);
