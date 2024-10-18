<script setup lang="ts">
useSeoMeta({
  title: "Eventa - امروز",
  description: "Eventa",
  ogImage: "/logo-white.jpg",
  twitterImage: "/logo-white.jpg",
  twitterTitle: "Eventa",
});

const today = new Date();

const persianDate = getPersianDate(today);
</script>
<template>
  <DayActions :date="today" />

  <DayFormattedDate :date="today" />

  <SeasonImage :persian-month="persianDate.month" />

  <DayEvents
    :date-info="{
      year: persianDate.year,
      month: persianDate.month,
      day: persianDate.day,
    }"
  />
</template>
