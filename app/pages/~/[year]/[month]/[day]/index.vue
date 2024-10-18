<script setup lang="ts">
import { DateInfoSchema } from "@/schemas/date-info";

const route = useRoute();
const params = DateInfoSchema.parse(route.params);
const currentDate = new Date();
currentDate.setFullYear(params.year);
currentDate.setMonth(params.month);
currentDate.setDate(params.day);

const persianDate = getPersianDate(currentDate);

useSeoMeta({
  title: `Eventa - ${persianDate.year}/${persianDate.month}/${persianDate.day}`,
  description: "Eventa",
  ogImage: "/logo-white.jpg",
  twitterImage: "/logo-white.jpg",
  twitterTitle: "Eventa",
});
</script>
<template>
  <DayActions :date="currentDate" />

  <DayFormattedDate :date="currentDate" />

  <SeasonImage :persian-month="persianDate.month" />

  <DayEvents
    :date-info="{
      year: persianDate.year,
      month: persianDate.month,
      day: persianDate.day,
    }"
  />
</template>
