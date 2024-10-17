<script setup lang="ts">
const props = defineProps<{ date: Date }>();
const { date } = props;
</script>

<template>
  <div class="flex justify-between flex-col text-center">
    <span>{{
      date.toLocaleDateString("fa-IR", {
        timeZone: "Iran",
        month: "long",
        weekday: "long",
        day: "numeric",
      })
    }}</span>
    <span class="mt-3">{{
      date.toLocaleDateString("fa-IR", {
        timeZone: "Iran",
      })
    }}</span>
    <span class="mt-3">{{
      date.toLocaleDateString("en-US", {
        timeZone: "Iran",
        month: "long",
        weekday: "long",
        day: "numeric",
      })
    }}</span>
    <span class="mt-3">{{
      date.toLocaleDateString("en-US", {
        timeZone: "Iran",
      })
    }}</span>
  </div>
</template>
