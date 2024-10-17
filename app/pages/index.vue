<script setup lang="ts">
useSeoMeta({
  title: "Eventa - امروز",
});

const today = new Date();

const persianDate = getPersianDate(today);
</script>
<template>
  <DayActions :date="today" />

  <DayFormattedDate :date="today" />

  <DayEvents
    :date-info="{
      year: persianDate.year,
      month: persianDate.month,
      day: persianDate.day,
    }"
  />
</template>
