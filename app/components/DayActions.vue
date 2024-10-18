<script setup lang="ts">
interface Props {
  date: Date;
}
const props = defineProps<Props>();
const { date } = props;

const { nextDay, previousDay } = getDayActionsDate(date);
</script>
<template>
  <div class="flex items-center w-full">
    <PreviousDayAction
      :date-info="{
        year: previousDay.year,
        month: previousDay.month,
        day: previousDay.day,
      }"
    />
    <hr class="w-full" />
    <RelativeTimeFormat :date="date" />
    <hr class="w-full" />
    <NextDayAction
      :date-info="{
        year: nextDay.year,
        month: nextDay.month,
        day: nextDay.day,
      }"
    />
  </div>
</template>
