import { createClient } from "@supabase/supabase-js";
import { config } from "@/config";
import type { DayInfo } from "@/schemas/day-info";

export const supabase = createClient(config.supabaseUrl, config.supabaseKey);

export const getDayInfo = (eventKey: string) => {
  return supabase
    .from("events")
    .select()
    .eq("event_key", eventKey)
    .limit(1)
    .single();
};

export const saveDayInfo = (eventKey: string, dayInfo: DayInfo) => {
  return supabase.from("events").insert({
    is_holiday: dayInfo?.isHoliday,
    event_key: eventKey,
    events: JSON.stringify(
      dayInfo?.events.map((e) => ({ ...e, is_holiday: e.isHoliday }))
    ),
  });
};
