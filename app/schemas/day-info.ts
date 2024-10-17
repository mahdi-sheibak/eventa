import { z } from "zod";

export const EventSchema = z
  .object({
    description: z.string(),
    is_holiday: z.boolean(),
  })
  .transform((arg) => ({
    description: arg.description,
    isHoliday: arg.is_holiday,
  }));

export type Event = z.infer<typeof EventSchema>;

export const DayInfoSchema = z
  .object({
    is_holiday: z.boolean(),
    events: z.array(EventSchema),
  })
  .transform((arg) => ({
    events: arg.events,
    isHoliday: arg.is_holiday,
  }))
  .optional();

export type DayInfo = z.infer<typeof DayInfoSchema>;
