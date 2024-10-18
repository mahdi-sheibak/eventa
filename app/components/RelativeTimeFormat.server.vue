<script setup lang="ts">
import { differenceInDays } from "date-fns/differenceInDays";
interface Props {
  date: string;
}
const props = defineProps<Props>();
const { date } = props;
const actualDate = new Date(date);
const currentDate = new Date();
const differentDay = differenceInDays(actualDate, currentDate);

console.log({ differentDay, actualDate, currentDate });

const { locale } = useI18n();

const localeFormatter = locale.value === "en" ? "en" : "fa-IR";
const relativeTimeFormat = new Intl.RelativeTimeFormat(localeFormatter, {
  localeMatcher: "best fit", // options: “lookup”, “best fit”
  numeric: "auto", // options: “auto”, “always”
  style: "long", // options: “narrow”, “short”, “long”
});
</script>

<template>
  <p class="text-center w-full animate-fade">
    {{ relativeTimeFormat.format(differentDay, "day") }}
  </p>
</template>
