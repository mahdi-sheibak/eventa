<script setup lang="ts">
import type { DateInfo } from "@/types";
interface Props {
  dateInfo: DateInfo;
}
const props = defineProps<Props>();
const { year, month, day } = props.dateInfo;

const { dayInfo } = await useDayInfo({ year, month, day });
</script>

<template>
  <main class="flex flex-col gap-5">
    <div class="text-center">
      <HolidayBadge v-if="dayInfo?.isHoliday" />
    </div>

    <EventsList :events="dayInfo?.events" />
  </main>
</template>
