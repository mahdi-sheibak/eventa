<script setup lang="ts">
const props = defineProps<{ date: Date }>();
const { date } = props;
const { nextDay, previousDay } = getDayActionsDate(date);
</script>
<template>
  <div class="flex px-5 items-center w-full">
    <PreviousDayAction
      :date-info="{
        year: previousDay.year,
        month: previousDay.month,
        day: previousDay.day,
      }"
    />
    <hr class="w-full" />
    <p class="w-[50%] text-center">تاریخ امروز</p>
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
