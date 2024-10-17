import { supabase } from "@/supabase";
import type { DayInfo } from "@/schemas/day-info";

const getDayInfo = (eventKey: string) => {
  return supabase
    .from("events")
    .select()
    .eq("event_key", eventKey)
    .limit(1)
    .single();
};

const saveDayInfo = (eventKey: string, dayInfo: DayInfo) => {
  return supabase.from("events").insert({
    is_holiday: dayInfo?.isHoliday,
    event_key: eventKey,
    events: JSON.stringify(
      dayInfo?.events.map((e) => ({ ...e, is_holiday: e.isHoliday }))
    ),
  });
};

export const db = {
  getDayInfo,
  saveDayInfo,
};
